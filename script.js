/*Change themes with buttons*/
const button = document.getElementsByClassName("themes")
const style = button.value;

function swapStyle(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}
button.onclick =  swapStyle(style);