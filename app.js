var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var numeric = require('numeric');
var fs = require('fs');
var util = require('util');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.put('/cholmod',function(req,res){
  var cmpMat = req.body.matrix;
  var orgMat = numeric.ccsFull(cmpMat);
  var file = fs.createWriteStream('orgMat.json');
  file.on('error', function(err) { /* error handling */ });
  orgMat.forEach(function(v) { file.write(v.join(', ') + '\n'); });
  file.end();
  // var L = exec("./cholmod_simple orgMat.tri");
  // var compressedL = compress(L);
  //
  res.sendStatus(200);
});

app.listen(3000, function () {
  console.log('Matrix offloader listening on port 3000...');
});


