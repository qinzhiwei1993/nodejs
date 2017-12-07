var crypto = require('crypto');

var md5 = crypto.createHash('md5');

//对1进行MD5加密
var mingma = '1';
//第一次加密
var password = md5.update(mingma).digest('base64');
password = to_Md5(password);//第二次加密
console.log(password)

function to_Md5(mingma){
    var md5 = crypto.createHash('md5');
    var password = md5.update(mingma).digest('base64');
    return password;
}