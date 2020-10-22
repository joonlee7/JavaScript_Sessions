
number = 100

function myFunc() {
    this.number = 200
    console.log(number)       //local variable 200
    console.log(this.number)  //undefined
}

//myFunc()

obj = new myFunc()
console.log(obj.number)