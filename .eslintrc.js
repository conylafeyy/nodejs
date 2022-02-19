module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'airbnb/base',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-debugger': 'off',
      'no-console': 'off'
    }
  }
  