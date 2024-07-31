/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'studiomaya.io',
          },
        ],
        destination: 'https://www.studiomaya.io/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
