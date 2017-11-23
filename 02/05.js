var People = require('./test/people.js');//require 引入需要使用的js文件
//相当于增加了一个顶层变量


var xiaoming = new People("小明", '男', '12');
xiaoming.sayHello();