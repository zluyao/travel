// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  parser: 'babel-eslint', // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: { // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    sourceType: 'module'
  },
  env: { // 此项指定环境的全局变量，下面的配置指定为浏览器环境
    browser: true,
  },
  extends: 'standard', // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  plugins: [
    'html'
  ], // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  rules: {
    'comma-dangle': 0, // 对象字面量项尾不能有逗号
    'new-cap': 0, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'no-console': 0,// 禁止使用console
    'no-extra-semi': 0, // 禁止多余的冒号
    'no-new': 0, // 禁止在使用new构造一个实例后不赋值
    'no-undef': 0, // 不能有未定义的变量
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
    'semi': [2, 'always'], // 语句强制分号结尾
    'no-unused-expressions': 'off', // 禁止无用的表达式
    'generator-star-spacing': 'off', // 生成器函数*的前后空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' // 禁止使用debugger
  }
}
