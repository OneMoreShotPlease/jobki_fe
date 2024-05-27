/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
