'use strict';

// Упраженение 1

for (let i = 0; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log(i)
	}
}

// Упражнение 2

let sum = 0;
for (let a = 0; a < 3; a++) {
	let number = +prompt('Введите число')

	if (Number(number)) {
		sum = sum + number;
	} else {
		alert('Ошибка вы ввели не число')

	}
}
alert(sum)

// Упражнение 3

let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function getNameOfMonth(a) {

	let nameMonth = month[a];

	console.log(nameMonth)
}


let index = -1;

while (index < month.length) {

	index++

	if (index === 9) continue

	console.log(month[index])

}

// Упражнение 4

// IIFE — это функция, которая выполняется сразу же после того, как была определена.

// Записывается IIFE так:
(function () {
	// ...Тело функции
})()


(function (value) {
	var greet = 'Hello';
	console.log(greet + ' ' + value);
})('IIFEs');