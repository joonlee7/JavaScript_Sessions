/**
 * JS Hoisting:
 * In JS, variables and functions can be used before declaring it
 */

 
//number = 100
//console.log('Number : ' + number)

/** Hoisting only works with declaration, not initialization */

//console.log(number)
//var number = 100

/** JS moves function declaration to the top just like variables */

myFunc()
function myFunc() {
    console.log('This is my function')
}

/** JS does not move function initialization to the top */

myFunc()
var myFunc = function myFunction() {
    console.log('This is my function')
}