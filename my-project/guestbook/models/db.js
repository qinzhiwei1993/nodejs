//这个模块里封装了所有对数据库的常用操作
var MongoClient = require('mongodb').MongoClient;
//不管是库的什么操作，都要先链接数据库，所以我们可以把连接数据库
//封装成为内部函数

function _connectDB(callback){
    var url = "mongodb://localhost:27017/guestbook";
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log("连接mongodb数据库失败！");
            db.close();
            return;
        }
        console.log("连接mongodb数据库成功！");
        callback(db);
    })
}

//插入数据
exports.insertOne = function(collectionName, json, callback){
    _connectDB(function(db){
        db.collection(collectionName).insertOne(json, function(err, result){
            callback(err, result);
            //数据库断开连接
            db.close();
        })
    })
}

//查找数据，找到所有数据  contions是个对象{pageamount: , page: }
exports.find = function(collectionName, json, contions, callback){//给参数设置默认值
    var skipnumber = (contions.page - 1) * contions.pageamount;
    var limitnumber = contions.pageamount;
    _connectDB(function(db){
        var cursor = db.collection(collectionName).find(json).skip(skipnumber).limit(limitnumber);//为可用于迭代MongoDB结果的查询创建一个游标
        cursor.toArray(function(err, docs){

            db.collection(collectionName).count(function(err, count){//查询文档的数目
                console.log(count);
            })
            //返回所有的documents
            callback(err, docs);
            db.close();
        })
    })
}

//删除
exports.deleteMany = function(collectionName, json, callback){
    _connectDB(function(db){
        db.collection(collectionName).deleteMany(json, function(err, result){
            callback(err, result);
            db.close();
        })
    })
}

//修改
exports.update = function(collectionName, oldjson, newjson, callback){
    _connectDB(function(db){
        db.collection(collectionName).updateMany(oldjson,{
            $set: newjson
        }, function(err, result){
            callback(err, result);
            db.close();
        })
    })
}