var express = require("express");
var session = require('express-session')
var app = express();

//app.set('trust proxy', 1);//trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/', function(req, res){
    console.log(req.session);
    if(req.session.login){
        res.send("欢迎你" +req.session.username);
    }else{
        res.send("你没有登录");
    }

})

app.get('/login', function(req, res){
    req.session.login = true;//设置这个session
    req.session.username = "考拉";
    console.log(req.session);
    res.send("你已经成功登录");
})

app.listen(3000);