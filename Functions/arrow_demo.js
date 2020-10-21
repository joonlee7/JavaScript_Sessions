
/**
 * Arrow function is the concept of ES6.
 * An alternative way to write a shorter syntax compared to the functions or function expressions
*/

/**
 function addition(a, b) {
    return (a + b)
 }

 console.log(addition(100, 200))
*/

/**
 * expression function
    add = function addition(a, b) {
        return a + b
    }

    console.log(add(100, 200))
*/

/**
 * anonymous function
    add = function (a, b) {
        return a + b
    }

    console.log(add(100, 200))
*/

/**
 * arrow function
sayHello = () => console.log('Hello everyone!')
sayHello()

console.log('----------------------------')

sayHelloWithMessage = () => {
    console.log('Ayo what\'s good shawty')
    console.log('Let\'s learn about JS, shawty')
}
sayHelloWithMessage()

console.log('----------------------------')

add = (a, b) => {return a + b}
console.log(add(100, 200))
 */

 let numbers = [4, 2, 6]
 numbers.sort((a, b) => b - a)
 console.log(numbers)