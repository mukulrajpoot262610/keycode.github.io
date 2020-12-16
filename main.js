function getElement() {
    return document.getElementById('num').innerText
}

function printElement(keycode) {
    return document.getElementById('num').innerText = keycode
}

function getSentence() {
    return document.getElementById('sentence').innerText
}

function printSentence(keyname) {
    return document.getElementById('sentence').innerText = keyname
}


window.addEventListener('keydown', function(e){
    printElement(e.keyCode)
    printSentence("You Pressed " + "'" + e.key + "'")
})
