/**
 * 
 */

let myHeading = document.querySelector('h1');
myHeading.textContent = 'JavaScript Hello world!';


/* 이건 주석 */

// 이건 주석!

/*let iceCream = 'chocolate';
if(iceCream === 'chocolate'){
	alert(multiply(2,3))
} else {
	alert('NO');
}*/


/*document.querySelector('html').onclick = function() {
	alert('너 클릭했어?');
}

document.querySelector('h1').onclick = function() {
	alert('이건 애플이라구');
}*/




function multiply(n1, n2){
	let result = n1 * n2;
	return result;
}

let apple_image = document.querySelector('img');

apple_image.onclick = function() {
	let apple_image_src = apple_image.getAttribute('src');
	if(apple_image_src === 'images/apple.jpg'){
		apple_image.setAttribute('src', 'images/apple2.jpg');
	} else {
		apple_image.setAttribute('src', 'images/apple.jpg');
	}
}

let button_change_user = document.querySelector('button');
let h1_apple = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name');
	if(myName == '' || myName == null){
		setUserName();
	} else {
	localStorage.setItem('name', myName); // 브라우저에 데이터를 저장할 수 있도록 localStorage 라는 api를 사용.
	h1_apple.textContent = 'apple is cool, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	h1_apple.textContent = 'apple is cool, ' + storedName;
}

button_change_user.onclick = function() {
	setUserName();
}



