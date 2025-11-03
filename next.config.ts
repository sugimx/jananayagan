import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    DOMAIN_URL: "https://jananayagan-backend-3moy.vercel.app/api",
    API_BASE_URL: "https://jananayagan-backend-3moy.vercel.app/api",
    AUTH_SECRET: "<@TISAUTHSECRET@>",
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: "443405172001-sn5207gfe8nned820k77fe3265imthj3.apps.googleusercontent.com"
  }
};

export default nextConfig;
