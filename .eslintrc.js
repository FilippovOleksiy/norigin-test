module.exports = {
  parser: 'babel-eslint',
  rules: {
    'no-console': [
      'error',
      {
        allow: ['log', 'error'],
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};
