import { connect } from "$/dbConfig/connector";
import User from "$/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   connect();
   try {
      const { email, password } = await req.json();
      if (!email || !password) {
         console.log("invalid daraa")
         return NextResponse.json({ message: "invalid user name and pass" })
      }

      const user = await User.findOne({ Email: email });
      if (!user) {
         console.log("user not found")
          return NextResponse.json({ error: "invalid email" }, { status: 400 });
      }

      const result = await bcrypt.compare(password, user.Password);
      if (!result) {
         return NextResponse.json({ error: "incorrect passwored" }, { status: 400 })
      }
      const tokenInfo = {
         id: user._id,
         email: user.Email
      }

      const token = await jwt.sign(tokenInfo, process.env.STRING, { expiresIn: "1d" })
      const Response = NextResponse.json({ message: "sucessfulti logged in" }, { status: 200 });
      Response.cookies.set("MINI_COMMERCE", `bearer ${token}`);
      return Response;

   } catch (error) {
      console.log("object", error)
      return NextResponse.json({ error: "internal server error" }, { status: 500 })
   }
}