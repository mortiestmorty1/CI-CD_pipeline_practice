import pkg from 'globals';
const { globals } = pkg;

export default {
  globals: globals,
  extends: [
    '@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    // Here you can override or extend the rules settings from the plugins
  }
};
