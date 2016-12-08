// ex: node program.js file.txt
var fs = require('fs');
var contentBuffer = fs.readFileSync(process.argv[2]);
console.log(contentBuffer.toString().split("\n").length-1);
