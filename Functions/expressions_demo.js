
var fullName = function getFullNameAgain() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    document.write(`Hello ${fname} ${lname}! ${getStatus(age)}!`);  
}

function getStatus(age) {
    if(age >= 18){
        return 'You are valid to vote';
    }else {
        return 'You are not valid to vote';
    }
}