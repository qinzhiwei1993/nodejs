var models = require('../models/files');
exports.showIndex = function(req, res){
    //展示首页，显示public下所有文件夹
    // res.render('index');
    models.getAllAlbums(function(albums){
        res.render('index', {
            files: albums
        })
    })
}
//相册页
exports.showAblum = function(req, res, next){
    //遍历相册中所有图片
    var albumname = req.params.album;
    //具体业务交给models
    models.getAllImagesByAlbumName(albumname, function(err, images){
        if(err){
            next();
            return;//如果没有找到，直接交给下一层中间件来处理
        }
        res.render('album', {
            images: images
        })
    })
}