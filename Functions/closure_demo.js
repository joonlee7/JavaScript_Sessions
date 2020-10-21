
//Closure means inner function(a function within a function)
//closure function always has access to the vars and parameters of outer function

/**
function outerFunction() {
    var count = 1
    function innerFunction() {
        console.log(count)
    }
    return innerFunction
}

var innerFunctionResult = outerFunction()
innerFunctionResult()
*/

function counter() {
    var counter = 0
    function increaseCounter() {
        return counter += 1
    }
    return increaseCounter
}

var counter = counter()
console.log(counter()) //1
console.log(counter()) //2
console.log(counter()) //3
console.log(counter()) //4
