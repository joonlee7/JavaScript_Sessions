
var fs = require('fs')

var data1 = fs.readFileSync('demo1.txt')
console.log(data1.toString())

var data2 = fs.readFileSync('demo2.txt')
console.log(data2.toString())