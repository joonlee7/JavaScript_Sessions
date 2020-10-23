
var fs = require('fs')

fs.readFile('source1.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile('destination1.txt', data, function (err){
            if(err){
                console.log(err)
            }else {
                console.log('Data copied from source1.txt to destination1.txt successfully')
            }
        })
    }
})