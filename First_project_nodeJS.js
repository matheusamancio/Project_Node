var http = require('http');

var server = http.createServer(function(req,res) {

  res.end("<html><body> my first code on nodeJS </body></html> ")

});

server.listen(3000);
