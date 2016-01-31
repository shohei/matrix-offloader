module.exports = {
  createMatrix: function(){
    // var fs= require('fs');
    // var numeric = require('numeric');
    // var str = fs.readFileSync('matrix.json', 'utf8')
    // var compress = JSON.parse(str);
    // var matrix = numeric.ccsSparse(compress);
    var exec = require('child_process').exec;
    var cmd = './solvematrix matrix';
    exec(cmd, function(error, stdout, stderr) {
        // command output is in stdout
        // });
  },
  readResult : function(){
    var result = readFileSync('matrix_result.json');
    console.log(result);
  }
}

