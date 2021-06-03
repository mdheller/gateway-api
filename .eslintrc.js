module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true
  },
  rules: {
    camelcase: 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'guard-for-in': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'new-cap': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': 'error',
    radix: 'off'
  }
}
