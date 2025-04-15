import { NextResponse } from "next/server";
import main from "$/lib/openai";

export async function POST() {
  try {
    const data=await main();
    return NextResponse.json({ message: data }, { status: 200 })
  } catch (error) {
    console.log("errorrr",error)
   return NextResponse.json({error:error})
  }
  }