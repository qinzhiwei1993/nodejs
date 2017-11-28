var express = require('express');

var app = express();

app.get('/', function(req, res){
    //aa?name=qin&sex=nan
    console.log(req.query); //直接获取?后面的参数
    res.send();
})

app.listen(3000);

