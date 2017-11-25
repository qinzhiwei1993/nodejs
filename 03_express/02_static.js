var express = require('express');
var app = express();

//静态化static
app.use(express.static('./static'));

app.listen(3000);