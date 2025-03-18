const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Read the JSON file
const dataPath = path.join(__dirname, "migraterdata.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// Debug the MongoDB URI
console.log("MongoDB URI:", process.env.MONGODB_URI);

async function migrate() {
  const uri = process.env.MONGODB_URI; // Fallback value
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("register"); // Replace with your database name
    const collection = database.collection("allproducts");

    // Insert the data into the collection
    const result = await collection.insertMany(data);
    console.log(result)
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.error("Error during migration:", error);
  } finally {
    await client.close();
  }
}

migrate().catch(console.error);