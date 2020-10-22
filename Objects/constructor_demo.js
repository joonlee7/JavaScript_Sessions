/**
//Class in JS
function Person(fName, lName) {
    this.firstName = fName || 'Unknown'
    this.lastName = lName || 'Unknown'
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}


//Creating object constructor
person = new Person('Sandi', 'Booby')
person1 = new Person('Joon', 'Lee')
person2 = new Person('Eun', 'Lee')
person3 = new Person('Kyu', 'Lee')
person4 = new Person()
console.log(person.firstName)
console.log(person.lastName)
console.log(person.getFullName())
console.log(person1.getFullName())
console.log(person2.getFullName())
console.log(person3.getFullName())
console.log(person4.getFullName())
 */

function Person(fName, lName) {
    this.firstName = fName || 'Unknown'
    this.lastName = lName || 'Unknown'
    Object.defineProperties(this, {
        'FirstName': {
            get: function () {return this.firstName},
            set: function (value) {this.firstName = value}
        }
    })
}

var p1 = new Person()
console.log(p1.FirstName)
p1.FirstName = 'Joon'
console.log(p1.FirstName)