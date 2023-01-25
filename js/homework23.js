'use strict'

// Упражнение 1

let count = prompt('Введите число');

if (!Number(count)) {

	console.log('Вы ввели не число')
	
} else {

	let countId = setInterval(() => {

		count--

		console.log(`Осталось ${count} `)

		if (count === 0) {

			clearInterval(countId)

			console.log('Время вышло!')

		}

	}, 1000);
}



let promise = new Promise(function (resolve, reject) {

	if (!Number(count)) {

		reject()

		return;

	}

	let countId = setInterval(() => {

		count--

		console.log(`Осталось ${count} `)

		if (count === 0) {

			resolve()

			clearInterval(countId)

		}

	}, 1000);

});


promise

	.then(function () {

		console.log('Время вышло')

	})

	.catch(function () {

		console.log('Вы ввели не число')


	});



	// Упражнение 2


	console.time('time')

	fetch('https://reqres.in/api/users')

		.then((response) => {

			return response.json();

		})

		.then((data) => {

			console.log(data)

			console.log(`Получили пользователей: ${data.data.length}`)

			for (let i of data.data) {
				
				console.log(`${i.first_name} ${i.last_name} (${i.email}) `)

			}

            console.timeEnd('time')

		})

		.catch((response) => {

			console.log('Error')

		});
