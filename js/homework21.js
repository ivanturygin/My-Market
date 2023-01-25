'use strict'

// Упражнение 1

let user = {
   user:'Ivan',
   city:'Kovrov',
}

/**
 * Проверяет наличие свойств в объекте
 * @param {object} obj Имя объекта
 * @returns {boolean} true если в объекте нет свойств
 * @returns {boolean} false если в объекте есть свойства
 */

function isEmpty(obj) {
	for (let key in obj) {

	return console.log(false)

	}

   return console.log(true)
}

isEmpty(user)

// Упражнение 3

let salaries = {

	John: 100000,
	Ann: 160000,
	Pete: 130000,

}

/**
 * Производит расчет повышения зарплаты на определенный процент
 * @param {Number} perzent Процент повышения зарплаты
 * @returns {object} зарплаты с учетом повышения
 * @returns {Number} суммарное значение всех зарплат после изменения
 */

function raiseSalary(perzent) {

	perzent = perzent / 100 + 1;

	salariesNew = Object.assign({}, salaries);

	for (let key in salariesNew) {
		salariesNew[key] = Math.floor(salariesNew[key] * perzent)
	}

	let salariesSum = 0;

	for (let salar in salariesNew) {
		salariesSum += salariesNew[salar]
	}

	console.log(salariesSum)

}


raiseSalary(10)