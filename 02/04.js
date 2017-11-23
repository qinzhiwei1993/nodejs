var foo = require('./test/foo.js');//require 引入需要使用的js文件
//相当于增加了一个顶层变量


//使用者用foo 接受foo.js暴露出来的变量和函数
console.log(foo.msg);