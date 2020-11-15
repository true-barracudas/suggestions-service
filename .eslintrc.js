module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
  },
};
