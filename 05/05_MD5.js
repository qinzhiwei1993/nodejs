var express = require('express');
var session = require('express-session');
var app = express();



var db = require('./models/db.js');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    console.log(req.session);
    if(req.session.login){
        res.send("你好" + req.session.username);
    }else{
        res.send("请登录");
    }

})

app.get('/login', function(req, res){
    res.render('login');
})

app.get('/checklogin', function(req, res){
    var username = req.query.username;
    var password = req.query.password;
    //用户名正确，密码正确，登录成功。
    //用户名正确，密码不正确，登录失败。
    //用户名没找到， 用户名错误。
    //比对数据库
    db.find('users', {"username": username}, {pageamount: 99, page:1}, function(err, result){
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        if(result.length > 0){
            var db_password = result[0].password;
            if(db_password == password){
                req.session.login = "1";
                req.session.username = username;
                res.send("恭喜，登录成功");
            }else{
                res.send("密码错误");
            }
        }else{
            res.send("用户名不存在，请严查用户名");
        }
    })
})

app.listen(3000);
