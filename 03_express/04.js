var express = require('express');

var app = express();
app.set('view engine', 'ejs');//设置模板引擎
//无视大小写
app.get('/AAb', function(req, res){// AAb aab都是一样的
    res.send('网址不分大小写');
})

app.get('/student/:id', function(req, res){
    var id = req.params.id;
    var reg = /^[\d]{6}$/;//再用正则判断参数
    if(reg.test(id)){
        res.send(id);
    }else{
        res.send("请检查格式");
    }
})

app.listen(3000);