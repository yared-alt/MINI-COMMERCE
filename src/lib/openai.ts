import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    console.log("hello in utils")
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Hello world" }],
    model: "gpt-3.5-turbo",
  });
  completion.choices[0],
  const data="hi";
  return(data);
}

export default main