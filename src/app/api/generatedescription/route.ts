import {NextResponse } from "next/server";

export async function POST() {

    const message=[
        {role:`user",content:"please write pure precise,appeling and call to action description for this data and it will be posted or taged with product on ecommerce website the data is:addidass, color,red blue 44%discount new`}
    ]
  
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DESCRIPTION_TOKEN}`,
        },
        body: JSON.stringify({
          model: "gpt-4-1106-preivew",
          
          prompt:message,
          max_tokens: 100,
        }),
      });
  
      const data = await response.json();

      console.log("datss",data)
      NextResponse.json({message:data})

} catch (error) {
      console.error('Error calling OpenAI API:', error);
    }
    
  }