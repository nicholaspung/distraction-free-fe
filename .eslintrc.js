module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.vue', '*.js'],
      rules: {
        'linebreak-style': 'off',
        'max-len': 'warn',
        'operator-linebreak': 'warn',
        'comma-dangle': 'warn',
        'object-curly-newline': 'warn',
        'implicit-arrow-linebreak': 'warn',
      },
    },
  ],
};
