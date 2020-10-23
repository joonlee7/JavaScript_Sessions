
var fs = require('fs')

// fs.writeFile('sample1.txt', 'Hello world!', function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Data is written successfully')
//     }
// })

fs.appendFile('sample1.txt', ' Stay frosty, bitches!', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Data is written successfully')
    }
})