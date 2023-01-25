'use strict';

// Упражнение 1

let a = '$100';
let b = '300$';
let summ = (+a.slice(1)) + (+b.slice(0, 3));

console.log(summ)

// Упражнение 2

let message = ' привет, медвед      ';
message = (message.trim());
message = message[0].toUpperCase() + message.slice(1);

console.log(message)

// Упражнение 3

let user = prompt('Сколько вам лет?');

let message = (user <= 3) ? `Вам ${user} лет и вы младенец` :
	(user <= 11) ? `Вам ${user} лет и вы ребенок` :
	(user <= 18) ? `Вам ${user} лет и вы подросток` :
	(user <= 40) ? `Вам ${user} лет и вы познаете жизнь` :
	(user <= 80) ? `Вам ${user} лет и вы познали жизнь` :
	(user >= 81) ? `Вам ${user} лет и вы долгожитель` :
	"";

alert(message)

// Упражнение 4

let message = 'Я работаю со строками как профессионал!';
let count = message.split(' ');

console.log(count.length)