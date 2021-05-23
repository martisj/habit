export default {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    tsConfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['svelte3', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true,
  },
  ignorePatterns: ['node_modules'],
}
