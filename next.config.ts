/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_AGORA_APP_ID:
      process.env.NEXT_PUBLIC_AGORA_APP_ID ||
      process.env.PUBLIC_AGORA_APP_ID ||
      "",
  },
  api: {
    bodyParser: false, // disable Next.js body parser (we're using formidable instead)
    responseLimit: false, // disables response size limit (optional but helps with large JSON responses)
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb', // increase body size limit
    },
  },
};

module.exports = nextConfig;
