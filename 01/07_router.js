/**
 * Created by dell on 2017/11/15.
 */
//当用户访问/studen/1234567890 的查询学号的学生的id
//当用户访问/teacher/645433的时候，查询老师的信息
//其他的提示错误。如果位数不对，提示位数不对。。。
var http = require('http');
var server = http.createServer(function(req, res){
    var userurl = req.url;

    //正则表达式判断此时的地址

    //substr函数来判断此时的开头
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    if(userurl.substr(0, 9) == '/student/'){
        var studenid = userurl.substr(9);
        if(/^\d{10}$/.test(studenid)){//正则表达式加边界
            res.end("您要查询学生信息，id为：" + studenid);
        }else{
            res.end("学生的学号位数不对")
        }
    }else if(userurl.substr(0, 9) == '/teacher/'){
        var teacherid = userurl.substr(9);
        if(/^\d{6}$/.test(teacherid)){
            res.end("你要查询老师信息，id为：" + teacherid);
        }else{
            res.end("老师的学位号数不对")
        }
    }else{
        res.end("请检查url")
    }
})

server.listen(3000, '127.0.0.1');