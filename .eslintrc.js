module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-named-as-default': 0,
    'space-before-function-paren': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
