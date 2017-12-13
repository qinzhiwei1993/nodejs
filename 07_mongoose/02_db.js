var mongoose = require('mongoose');
//连接数据库
var db = mongoose.connect('mongodb://localhost/xixi', { useMongoClient: true });//连接到xixi数据库
mongoose.Promise = global.Promise;

//创建一个模型。猫的模型。所有的猫，都有名字，都是字符串。"类"。
// var Cat = mongoose.model('Cat', {name: String});
var Cat = db.model('Cat', {name: String});
//实例化一只猫
var tom = new Cat({name: '汤姆5'});
//调用实例化的这只猫的save方法，保存到数据库.
tom.save(function(err){
    console.log('喵喵');
})