/* Random color for title */
function randomize() {
    document.getElementById('title').style.color = randomColors();
}
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/* submit from with enter key */
function checkSubmit(e) {
    if(e && e.keyCode == 13) {
        // get the value of the input field
        let text = document.getElementById('search').value;
        // clear input field after enter key is pressed
        document.getElementById('search').value = "";
        console.log(text);
    }
}