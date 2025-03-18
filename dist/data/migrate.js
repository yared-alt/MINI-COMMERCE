import { MongoClient } from "mongodb";
import * as fs from "fs"; // Use namespace import for 'fs'
import * as path from "path"; // Use namespace import for 'path'
import * as dotenv from "dotenv"; // Use namespace import for 'dotenv'
import { fileURLToPath } from "url";
// Load environment variables
dotenv.config();
// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Read the JSON file
const dataPath = path.join(__dirname, "products.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
// Debug the MongoDB URI
console.log("MongoDB URI:", process.env.MONGODB_URI);
async function migrate() {
    const uri = process.env.MONGODB_URI;
    console.log(process.env, uri);
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("register"); // Replace with your database name
        const collection = database.collection("AllProducts");
        // Insert the data into the collection
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
    }
    catch (error) {
        console.error("Error during migration:", error);
    }
    finally {
        await client.close();
    }
}
migrate().catch(console.error);
