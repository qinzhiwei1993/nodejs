var express = require('express');
var app = express();
var db = require('./models/db.js');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;//将_id字符串转换为一个ObjectId对象。
//ObjectId(_id)  转换为数据库中的ObjectID对象

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//静态
app.use(express.static('./public'));

//设置模板引擎
app.set('view engine', 'ejs');

//显示留言列表 //增加留言

app.get("/", function(req, res){
    res.render("index");
})

//读数据
app.get("/du", function(req, res){
    db.find("guestbook", {}, {pageamount:99, page:1}, function(err, result){
        if(err){
            res.json({status: 400, msg: err});
            return;
        }
        res.json({status: 200, data:result});
    })
})

//处理留言

app.post('/tijiao', function(req, res){
    var body = req.body;
    db.insertOne("guestbook", body, function(err, result){
        if(err){
            res.json({status: 400});//给ajax看
            return;
        }
        res.json({status: 200, data: result.ops[0]});
    })
    //写入数据库
})


app.listen(3000);