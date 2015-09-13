'use strict';

var server = require('http').createServer(); // hereda de EventEmitter

// sintaxis alternativa
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write('something');
  response.end();
});

server.listen(8080);
console.log('Escuchando puerto 8080');
