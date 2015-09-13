'use strict';

var EventEmitter = require('events').EventEmitter;

// events = {
//   EventEmitter: function() { ... }
// }

var logger = new EventEmitter();

logger.on('error', function(level, message) {
  switch(level) {
    case 'INFO':
      console.log('[INFO]: ' + message);
      break;
    case 'WARN':
      console.log('[WARN]: ' + message);
      break;
    default:
      console.log('[CRITICAL]: ' + message); // envia email a desarrollador
  }
});

logger.emit('error', 'INFO' ,'No se encontro un id que entro por un request $GET');
logger.emit('error', 'WARN', 'Ocurrio un timeout');
logger.emit('error', 'CRITICAL', 'No se encuentra conexion a BD');
