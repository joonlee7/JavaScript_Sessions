/**
//Object literal
var obj = {
    firstName: 'Poop',
    lastName: 'McGee'
}
console.log(obj)

var obj = {
    name: 'Joon Lee',
    age: 26,
    city: 'Rochester',
    getObjInfo: () => `${this.name} ${this.age} ${this.city}` 
}
console.log(obj)

var obj = {
    name: 'Sandi Lee',
    age: 3,
    city: 'San Diego',
    getObjInfo: () => `${this.name} ${this.age} ${this.city}`
}
console.log(obj)

//Empty object literal
var obj = {}
console.log(obj)
 */

var obj = {
    firstName: 'Poop',
    lastName: 'McGee',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(obj.firstName)
console.log(obj.lastName)
console.log(obj.age)

console.log(obj.getFullName())
result = obj.getFullName()
console.log(result)