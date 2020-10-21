
function sayHello(name) {
    //console.log('Hello ' + name)
    alert(`Hello ${name}!`)
    
}

function getFullName(firstName, lastName) {
    alert(`${firstName} ${lastName}`)
}

function getFullNameAgain() {
    var fname = document.getElementById("firstName").value
    var lname = document.getElementById("lastName").value
    alert(`${fname} ${lname}`)
}

//sayHello('Joon');
//sayHello('King');

//getFullName('Joon', 'Lee');
//getFullName('Joon')
//getFullName('Joon', 'Pyo', 'Lee')