var fs = require('fs')
    , gm = require('gm');

// resize and remove EXIF profile data
gm('./public/1.png')
    .resize(240, 240, '!')
    .write('./public/2.png', function (err) {
        if (!err) console.log('done');
        console.log(err);
    });