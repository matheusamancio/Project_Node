var http = require('http');

var server = http.createServer(function(req,res) {

  var categoria = req.url;
  switch (categoria) {
    case "/name":
      res.end("<html><body> My name is Matheus </body></html> ");

      break;
    case "/lastname":
      res.end("<html><body> and my last name is Amancio </body></html> ");

      break;
    default:
      res.end("<html><body> My entire name is Matheus Amancio </body></html> ");

  }


});

server.listen(3000);
