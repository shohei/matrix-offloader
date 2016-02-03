var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/cholmod',function(req,res){
  var cmpMat = req;
  var orgMat = parse(cmpMat);
  io.write("orgMat.tri",orgMat);
  var L = exec("./cholmod_simple orgMat.tri");
  var compressedL = compress(L);
  res.send(compressedL);
}

app.listen(3000, function () {
  console.log('Matrix offloader listening on port 3000...');
});
