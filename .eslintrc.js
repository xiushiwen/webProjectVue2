// http://eslint.org/docs/user-guide/configuring
// http://eslint.cn/docs/rules/ 中文文档

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'indent': ["error", 4],
    // allow async-await
    'generator-star-spacing': 0,
    'semi': ['error', 'always'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  // 定义的全局变量需要再这里声明
  'globals': {
    'HFE_FLIGHT': true
  }
}
