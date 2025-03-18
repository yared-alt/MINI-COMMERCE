import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "$/dbConfig/connector";
import User from "$/models/userModel";
export async function POST(req) {
    try {
        connect();
        const { name, email, password } = await req.json();
        if (!email || !password ||
            !name) {
            return NextResponse.json({ massage: "error ocured" }, { status: 400, });
        }
        else {
            console.log(email, name, password);
            // check if the email is in db
            const user = await User.findOne({ Email: email });
            console.log(user);
            if (user) {
                console.log("user exist in db");
                return NextResponse.json({ error: "user alrady exist" }, { status: 400 });
            }
            // hash password
            const salt = await bcrypt.genSalt(10);
            const Hashedpassword = await bcrypt.hash(password, salt);
            // add user info to db
            const newuser = await new User({
                UserName: name,
                Email: email,
                Password: Hashedpassword
            });
            await newuser.save();
            console.log("User saved successfully!");
            // console.log(newuser)
            return NextResponse.json({ massage: "sucsesfully registerd" }, { status: 200 });
        }
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: "server error" }, { status: 500 });
    }
}
