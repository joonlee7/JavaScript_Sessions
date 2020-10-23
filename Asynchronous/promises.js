
/**
 * Promise:
 *  Helps in writing async code
 *  Is also help us avoid callback hell
 *  First we create promise and then we handle them
 *  Promise in JS can either be resolved or rejected
 */

/**
var promise = new Promise(function (resolve, reject) {
    var isTrue = true
    if (isTrue) {
        resolve('Your status is active.')
    } else {
        reject('You status is inactive.')
    }
})

promise.then(function (data) {
    console.log('.then() invoked')
    console.log(data)
}).catch(function (error) {
    console.log('.catch() invoked')
    console.log(error)
})

promise.then((data) => console.log(data))
       .catch((error) => console.log(error))
*/

var fs = require('fs')
const { resolve } = require('path')

var promise1 = new Promise((resolve, reject) => {
    fs.readFile('demo1.txt', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var promise2 = new Promise((resolve, reject) => {
    fs.readFile('demo2.txt', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

// promise.then((data) => console.log(data.toString()))
//     .catch((error) => console.log(error))

promise1.then((data) => {
    console.log(data.toString())
    promise2.then((data) => {
        console.log(data.toString())
    })
}).catch((error) => console.log(error))
