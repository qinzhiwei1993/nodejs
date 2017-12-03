var express = require('express');
var db = require('./models/db.js');

var app = express();

app.get('/', function(req, res){
    //插入数据，使用我们自己封装的db模块，就是DAO。
    //插入，三个参数，往哪个集合插，插入什么，插入后做什么。
    db.insertOne("teacher", {"name": "小红"}, function(err, result){
        if(err){
            console.log("插入数据失败");
            return;
        }
        res.send("插入数据成功");
    })
})

app.get('/du', function(req, res){
    //插入数据，使用我们自己封装的db模块，就是DAO。
    //分页 接受一个page参数
    var queryparams = req.query;
    var page = parseInt(queryparams.page) || 1;//每页显示5条。pageamount每页显示条数，page从第几条开始查
    var pageamount = parseInt(queryparams.pageamount) || 5;
    var json = {};
    //查询四个参数，查询那个集合，查询条件，分页条件，查询后做什么
    db.find("student", json, {pageamount: 5, page: page}, function(err, docs){
        if(err){
            console.log(err);
            return;
        }
        res.json(docs);
    })
})

app.get('/delete', function(req, res){
    var id = parseInt(req.params.id);
    db.deleteMany('student', {"_id": id}, function(err, result){
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
})

app.get('/update', function(req, res){
    db.update('student', {"name": "哈哈"}, {"name": "嘻嘻"}, function(err, result){
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
})
app.listen(3000);