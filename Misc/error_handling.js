
/**
 * JS has error handling using try/catch/finally block
 * try block is where we think we might get an error
 * catch block executes code when an error is caught
 * finally block is ALWAYS executed whether an error is caught or not
 */

// try {
//     addition(100, 200)
// }
// catch (ex) {
//     console.log('There is some error')
//     //console.log(ex) //if you want to see exact error message
// }
// finally {
//     console.log('Finally block is always executed no matter what')
// }

//function addition(a, b) {
//    console.log('Result = ' + (a+b))
//}

age = 1
try {
    if(age >= 18) {
        console.log('You are valid to vote!')
    }
    else{
        throw 'You are not valid to vote!'
    }
}
catch(ex) {
    console.log(ex)
}
finally{
    console.log('Finally block is always executed no matter what')
}