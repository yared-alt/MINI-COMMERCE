const nextConfig = {
  images:{
    domains:["res.cloudinary.com"]
  },
  env: {
      NEXT_PUBLIC_SOME_VARIABLE: process.env.OPENAI_API_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  reactStrictMode: true,
  pageExtensions: ["page.ts", "tsx", "ts", "api.ts"],
};

export default nextConfig;