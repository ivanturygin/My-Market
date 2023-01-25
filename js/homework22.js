'use strict'

// Упражнение 1

let arrOne = [1, 'a', {}, 5, true, 12];

/**
 * calculating the sum of numbers in an array
 * @param {object} addId
 * @returns sum of array numbers
 */

function getSumm(arr) {

	let results = arr.filter(function (a) {

		return a === +a;

	})

	let arrSum = results.reduce((sum, current) => sum + current, 0);

	return arrSum;

}

console.log(getSumm(arrOne))

// Упражнение 3

let cart = [4853, 8712, 5455, 1215];

/**
 *add to cart id product
 * @param {number} addId
 * @returns
 */

function addToCart(addId) {

	if (!Number(addId)) {

		return;

	}

	if (!cart.includes(addId)) {

		cart.push(addId)

	}

}

/**
 * delite from cart id product
 * @param {number} removeId
 */

function removeFromCart(removeId) {

	if (!Number(removeId)) {

		return;

	}

	cart = cart.filter(id => id !== removeId)

}

console.log(cart)