'use strict';

var fs = require('fs'); // file system
fs.readFile('README.md', function(err, data) {
  if (!err) {
    console.log(data); // datos binarios
    console.log(data.toString()); // convertido a string
  } else {
    console.log("No se encontro el archivo");
  }
});
console.log("Node es 'non-blocking'");
