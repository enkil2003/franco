'use strict';

var fs = require('fs');
var callback = function(err, data) {
  console.log(data); // puntero
  console.log(data.toString()); // convertido a string
}
fs.readFile('README.md', callback);
console.log("Node es 'non-blocking'");
