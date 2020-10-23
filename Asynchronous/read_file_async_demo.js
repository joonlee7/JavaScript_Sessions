
var fs = require('fs')

fs.readFile('demo1.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})

fs.readFile('demo2.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})
