
//Create a close button for each task in the list

var list = document.getElementsByTagName('li')
for (i = 0; i < list.length; i++) {
    var span = document.createElement('span')     //<span></span>
    var text = document.createTextNode('\u00d7')  //X
    span.appendChild(text)                        //<span>X</span>
    span.className = 'Close'
    list[i].appendChild(span)
}

//Click on a close button to hide current list item
var close = document.getElementsByClassName('Close')
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement
        div.style.display = 'None'
    }
}


function newTask() {

    var inputValue = document.getElementById('task').value
    var text = document.createTextNode(inputValue)
    var li = document.createElement('li')
    li.appendChild(text)
    if (inputValue === '') {
        alert('You must enter a task')
    }
    else {
        document.getElementById('tasks').appendChild(li)
        document.getElementById('tasks').value = ''
    }

    var span = document.createElement('span')     //<span></span>
    var text = document.createTextNode('\u00d7')  //X
    span.appendChild(text)                        //<span>X</span>
    span.className = 'Close'
    list[i].appendChild(span)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = 'None'
        }
    }
}

function removeAll() {
    //var list = document.getElementById('tasks')
    var list = document.getElementsByTagName('ul')
    list[0].innerHTML = ''
}