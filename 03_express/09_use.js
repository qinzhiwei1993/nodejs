var express = require('express');

//创建一个express工程
var app = express();

app.set('view engine', 'ejs');
//如果路径不写的话，就相当于写了'/';  app.use(function(req, res, next){});。。。能够匹配所有的网址
app.use('/', function(req, res, next){//会屏蔽下面所有的中间件，因为他会匹配所有的路由
    console.log(1);
    next();//会继续向下执行
})

app.get('/haha', function(req, res){
    res.render('haha',{
        news: [1,2,3]
    });
})

app.use('/admin', function(req, res){
    // GET 'http://www.example.com/admin/new'
    res.write(req.originalUrl + '\n'); // '/admin/new'
    res.write(req.baseUrl + '\n'); // '/admin'
    res.write(req.path + '\n'); // '/new'
    res.end("你好");
})
app.listen(3000);