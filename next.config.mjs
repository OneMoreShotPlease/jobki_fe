/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },

  compiler: {
    swcMinify: false,
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
