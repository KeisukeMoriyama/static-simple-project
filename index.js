var express = require('express');
var app = express();
app.use(express.static('statics'));
var port = 3000;

app.listen(port,function(){
console.log("the server has started。port:%d", port)
});
