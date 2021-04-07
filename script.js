let passlength = document.getElementById("plength");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let num = document.getElementById("num");
let symbol = document.getElementById("symbol");

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+';
let allElements;

oneUpper = () => upperLetters[Math.floor(Math.random() * upperLetters.length)];
oneLower = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
oneNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
oneSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
randomEl = () => allElements[Math.floor(Math.random() * allElements.length)];

function generate(){
	allElements = "";
	let arr = [];
	if (upper.checked){
		arr.push(oneUpper());
		allElements += upperLetters;
	}
	if (lower.checked){
		arr.push(oneLower());
		allElements += lowerLetters;
	}
	if (num.checked){
		arr.push(oneNumber());
		allElements += numbers;
	}
	if (symbol.checked){
		arr.push(oneSymbol());
		allElements += symbols;
	}
	while(arr.length < passlength.value){
		arr.push(randomEl());
	}
	document.getElementById("pass").innerHTML = randomize(arr);
}

function randomize(array){
	let generated = "";
	while(array.length){
	    let el = array[Math.floor(Math.random() * array.length)];
	    generated += el;
	    i = array.indexOf(el);
	    array.splice(i,1);
	}
	return generated;
}

let tArea = document.createElement('textarea');

function copyToClipboard() {
    tArea.value = document.getElementById("pass").innerHTML;
	document.body.appendChild(tArea);
	tArea.select();
    document.execCommand("copy");
    alert("Password copied to the clipboard: " + tArea.value);
	tArea.remove();
}

