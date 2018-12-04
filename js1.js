const input = document.getElementById('guess');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const mbut = document.getElementById('but');
let rand = newrand();
let answer;
let timer;

function rest(){
	result.innerHTML = null;
	restart.innerHTML = 'IF YOU WANT TO RESTART CLICK HERE'
	restart.style.display = 'none';
	input.style.display = 'block';
	result.style.display = 'block';
	mbut.style.display = 'block';
	rand = newrand();
}

function run(){
	

	answer = parseInt(input.value);

	console.log(rand, answer);
	input.value = null;

	if (answer == rand) {
		restart.insertAdjacentHTML("afterbegin", 'YEP, NUM WAS: ' + rand + '<br>');  
		restart.style.display = 'block';
		input.style.display = 'none';
		result.style.display = 'none';
		mbut.style.display = 'none';

	} else if (answer > rand) {
		result.innerHTML = 'NOUP, NUM IS LOWER THAN: ' + answer;
	}else if(answer < rand){
		result.innerHTML = 'NOUP, NUM IS HEIGHTER THAN: ' + answer;
	}
	
}

function newrand(){
	return Math.floor(Math.random() * (10000 - 1) + 1 );
}