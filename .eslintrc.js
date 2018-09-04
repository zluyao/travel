// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 0,
    'no-extra-semi': 0,
    'new-cap': 0,
    'no-new': 0,
    'no-undef': 0,
    'max-len': 0,
    'no-useless-escape': 0,
    'space-before-function-paren': [0, 'always'],//函数定义时括号前面要不要有空格
    'semi': [2, 'always'],//语句强制分号结尾
    'no-console': 0,// 禁止使用console
    'no-unused-expressions': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
