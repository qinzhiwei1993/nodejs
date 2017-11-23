var message = '你好';//message变量，是这个js文件内部的作用变量，外部要是使用，必须进行暴露

//exports.msg = message;//通过exports 进行暴露变量或者函数

module.exports = {
    msg : message
}

//这两种方法都可以
