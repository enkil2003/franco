'use strict';

var http = require('http');


http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("respuesta <b>del</b> servidor"); // el archivo es leido una sola vez y compilado en la memoria
  response.end();
}).listen(8080);

console.log("Escuchando puerto 8080");

// curl http://localhost:8080
