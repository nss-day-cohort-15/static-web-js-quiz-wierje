document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed")
    document.getElementById('howTall').focus()
})
console.log('Tree')

var e = document.getElementById('button').addEventListener('click', checkInput)
var f = document.getElementById('char').addEventListener('keyup', checkKeyPress)
var g = document.getElementById('howTall').addEventListener('keyup', checkKeyPress)

function checkKeyPress(event) {
  if (event.keyCode == "13"){
    checkInput()
  }
}

function checkInput() {
  var tree = {};

    var check = parseInt(document.getElementById('howTall').value)
    if (check === '') {
        alert('Try again.')
    } else if (check > 20) {
        alert('A number between 1 and 20, please')
    } else if (check < 1) {
        alert('A number between 1 and 20, please')
    } else {
        console.log(check)
        tree.height = check;
    }


    var checker = document.getElementById('char').value
    if (checker.length < 1) {
        alert('Try again.')
    } else if (checker.length > 1) {
        alert('Just one key entry. Any key')
    } else {
        console.log(checker)
        tree.character = checker;
    }
        console.log(tree)
}