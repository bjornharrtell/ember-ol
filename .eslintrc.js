module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  globals: {
    'ol': true
  },
  rules: {
    'semi': [2, 'always'],
    'no-console': [0]
  }
};
