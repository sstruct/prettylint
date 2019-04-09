var base = require('./base');

module.exports = Object.assign({}, base, {
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: Object.assign({}, base.rules, {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }),
});
