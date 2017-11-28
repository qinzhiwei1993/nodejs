var express = require('express');

var app = express();
app.set('view engine', 'ejs');//设置模板引擎

app.get('/', function(req, res){
    res.render('haha', {
        "news": [1,2,3,4,5]
    });//第一个参数是模板名称，(默认是找views文件夹下的index.ejs)，第二个参数为data，绑定到模板引擎的数据
})

app.listen(3000);