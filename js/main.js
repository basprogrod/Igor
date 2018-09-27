var btn1   = document.getElementById('btn1');
var btn2   = document.getElementById('btn2');
var main   = document.getElementById('main');
var myList = document.getElementById('list');
var ul     = document.getElementsByTagName('ul');
var story  = myList.getElementsByClassName('item');
var popup  = document.getElementsByClassName('popup')[0];
var close  = document.querySelector('.close');

console.log(popup);
console.log(story);
console.log(close);

var n = 2;
function addItem() {
 if (story.length == 0) n = 1;
 var newLi = document.createElement('li');
 newLi.innerHTML = `Задача ${n}`;
 newLi.className = 'item';
 myList.appendChild(newLi);
 popup.style.display = 'none';
 n++;
}

function delItem () {
	myList.removeChild(story[0]);

	if (story.length == 0) {
		popup.style.display = 'block';
	}
}

function closePop() {
	popup.style.display = 'none';
}

btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closePop);
