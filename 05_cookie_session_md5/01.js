var express = require('express');

var MongoClient = require('mongodb').MongoClient;

var app = express();

app.get('/', function(req, res){


    //url就是数据库的地址。 /表示数据库名称
    //加入数据库不存在，没有关系，程序会自动创建一个数据库
    var url = "mongodb://localhost:27017/haha";
    //连接数据库
    MongoClient.connect(url, function(err, db){
        //回到函数表示链接成功后做的事情，db就是连接到的数据库实体。
        if(err){
            console.log("数据库连接失败");
            return;
        }

        console.log("数据库连接成功");
        //var students = db.student.find();
        //console.log(students);
        //插入数据，集合如果不存在，程序会自动创建
        db.collection('student').insertOne({
            "name": "哈哈",
            "age": parseInt(Math.random() * 100 + 10)
        },function(err, result){
            //插入完毕后做的事情。result表示插入结果
            console.log(result);
            res.send(result);
            db.close();
        })
    })
})

app.listen(3000);