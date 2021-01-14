/* global module */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount: {},
  plugins: [
    ['@snowpack/plugin-babel'],
    ['@snowpack/plugin-typescript'],
    // {
    // "input": ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
    // transformOptions: {
    // babel transform options
    // }
    // }
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
    src: '/dist/',
    public: { url: '/', static: true, resolve: false },
  },
};
