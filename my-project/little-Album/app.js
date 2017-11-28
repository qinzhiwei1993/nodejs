var express = require('express');

var app = express();


global.__dirname = __dirname;
//引入控制器
var router = require('./controller');
app.set('view engine', 'ejs');

//设置静态文件  中间件
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));
//首页
app.get('/', router.showIndex);
app.get('/:album', router.showAblum);

// 最后的中间件
app.use(function(req, res){
    res.render('404');
})

app.listen(3000);