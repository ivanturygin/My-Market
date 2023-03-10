'use strict'

let product = {

	img: ["./images/image-1.webp", "./images/image-2.webp", "./images/image-3.webp", "./images/image-4.webp", "./images/image-5.webp"],
	name: 'Смартфон Apple iPhone 13',
	color: ["красный", "зеленый", "розовый", "синий", "белый"],
	colorAdd: "синий",
	memory: ['128 ГБ', '256 ГБ', '512 ГБ'],
	memoryAdd: '128 ГБ',
	screen: 6.1,
	system: 'iOS 15',
	interface: [Nfc, Bluetooth, WiFi],
	cpu: 'Apple A15 Bionic',
	weight: '173г',
	description: `Наша самая совершенная система двух камер. Особый взгляд на прочность дисплея.
Чип, с которым всё супербыстро.
Аккумулятор держится заметно дольше.
iPhone 13 - сильный мира всего.

Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов.
Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры.
Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы.
И повысили скорость работы матрицы на сверхширокоугольной камере.

Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков.
Новая широкоугольная камера улавливает на 47 % больше света для более качественных фотографий и видео.
Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.

Режим« Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости.
Просто начните запись видео.Режим« Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него.
Режим« Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре.
Теперь ваши видео будут смотреться как настоящее кино.`,
	price: 67990,
	old: 75990,
	discount: 8,
	delivery: [{
			name: 'Самовывоз',
			date: 'четверг, 1 сентября',
			cost: 0,
		},

		{
			name: 'Курьером',
			date: 'четверг, 1 сентября',
			cost: 0,
		}
	]

}

let reviewOne = {

	name: 'Марк Г',
	photo: './images/review-1.jpeg',
	rating: 5,
	experience: 'менее месяца',
	dignity: `это мой первый айфон после после огромного количества телефонов на андроиде. 
   всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.`,
	Flaws: `к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) 
	а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное`,

}

let reviewTwo = {

	name: 'Марк Г',
	photo: './images/review-2.jpeg',
	rating: 4,
	experience: 'менее месяца',
	dignity: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
	Flaws: 'Плохая ремонтопригодность',
}