import pkg from 'globals';
const { globals } = pkg;

import { configs as tsConfigs } from 'typescript-eslint';
import { configs as reactConfigs } from 'eslint-plugin-react';

export default {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
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
  },
  globals: globals.browser
};
