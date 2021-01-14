/* global module */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount: {},
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-typescript',
  ],
  // installOptions: {},
  devOptions: { open: 'none', port: 8008 },
  // buildOptions: {},
  alias: {
    // '@models': './src/models',
    // '@views': './src/views',
    // '@assets': './src/assets',
  },
  mount: {
    src: '/dist',
    public: { url: '/', static: true },
  },
};
