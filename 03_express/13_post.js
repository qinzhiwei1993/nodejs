var express = require('express');

var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

//使用中间件，过滤所有的url的req的body
app.use(bodyParser.urlencoded());



app.get('/', function(req, res){
    res.render('form');
})

app.post('/', function(req, res){
    console.log(req.body);
})

app.listen(3000);

