// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
