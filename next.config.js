const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"]
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
    },
    reactStrictMode: true,
    pageExtensions: ["page.ts", "tsx", "ts", "api.ts"],
};
export default nextConfig;
