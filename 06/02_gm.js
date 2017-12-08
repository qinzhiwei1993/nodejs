var gm = require('gm').subClass({imageMagick: true});
var fs = require('fs');

gm('/public/1.png').resize(240, 240);

