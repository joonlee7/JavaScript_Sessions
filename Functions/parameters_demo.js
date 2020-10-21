
//Default parameters
function getFullName(firstName, lastName ='Lee') {
    console.log(`${firstName} ${lastName}`)
}

getFullName('Joon')
getFullName('Joon', 'Pyo')

console.log('----------------------')

//Rest parameters
function add(...numbers) {
    total = 0
    for(var a of numbers){
        total = total+a
    }
    console.log(total)
}

add(5, 10, 20)
add(5, 10, 20, 40, 80)
add(5, 10, 20, 40, 80, 160, 320)

console.log('----------------------')

//Spread parameter
odd = [1, 3, 5, 7]
even = [2, 4, 6, 8]
combined = [...odd, ...even]

console.log(combined)