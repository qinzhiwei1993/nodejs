var ejs = require('ejs');

//模板
var str = "好高兴啊，今天我买了Iphone<%= a %>s";
//数据
var data = {
    a: 6
}

//数据绑定
var html = ejs.render(str, data);//str为模板，data是数据
//输出
console.log(html);