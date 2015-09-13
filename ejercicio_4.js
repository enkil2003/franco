'use strict';

var http = require('http');


http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("respuesta del servidor");
  setTimeout(function(){
    response.write("Timeout finalizado");
    response.end();
  }, 5000);
}).listen(8080);

console.log("Escuchando puerto 8080");
