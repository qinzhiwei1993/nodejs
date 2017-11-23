exports.showIndex = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.end("我是首页");
}

exports.showStudent = function(req, res){
    var id = req.url.substr(9);
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.end("我是学生页面：" +id);
}

exports.show404 = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.end("404");
}