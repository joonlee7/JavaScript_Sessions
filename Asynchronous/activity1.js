
var fs = require('fs')

//Callback hell

fs.readFile('source1.txt', function (err, data1) {
    if (err) {
        console.log(err)
    } else {
        fs.readFile('sample1.txt', function (err, data2) {
            if (err) {
                console.log(err)
            } else {
                fs.writeFile('activity.txt', data1 + data2, function (err) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('Data copied from source1 and sample1 to destination succesful!')
                    }
                })
            }
        })
    }
})
