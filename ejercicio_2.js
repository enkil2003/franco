'use strict';

var fs = require('fs');
var callback = function(err, data) {
  console.log(data.toString()); // convertido a string
  console.log("\n\n\n--------\n\n\n");
}
fs.readFile('README.md', callback);
fs.readFile('.gitignore', callback);
