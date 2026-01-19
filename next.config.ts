/** @type {import('next').NextConfig} */
const nextConfig = {
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
