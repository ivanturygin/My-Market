'use strict'

class AddReviewForm {


	constructor(form, inputTop, inputText, inputTextError, inputNum, inputNumError, inputs, nameForm) {

		this.form = form;
		this.inputTop = inputTop;
		this.inputText = inputText;
		this.inputNum = inputNum;
		this.inputTextError = inputTextError;
		this.inputNumError = inputNumError;
		this.inputs = inputs;
		this.nameForm = nameForm;

	}

	validForm(event) {


		event.preventDefault()

		let name = inputText.value;

		let num = +inputNum.value;

		let errorText = '';


		if (name.length <= 2) {

			errorText = 'Имя не может быть короче 2-х символов';

		}

		if (name.length === 0) {

			errorText = 'Вы забыли указать имя и фамилию';

		};

		document.querySelector('.input-error__text').innerText = errorText;

		inputTextError.classList.toggle("section-form_enable", errorText);

		inputText.classList.toggle('section-form_border-orange', errorText)



		if (errorText) return



		let errorNum = '';

		if (num === 0) {

			errorNum = "Оценка должна быть от 1 до 5";

		};

		if (!num) {

			errorNum = "Оценка должна быть от 1 до 5";

		};

		if (num < 1 || num > 5) {

			errorNum = "Оценка должна быть от 1 до 5";

		};

		if (!errorText || !errorNum) {

			localStorage.clear();

			nameForm.push('formOne');

		};


		document.querySelector('.num-error__text').innerText = errorNum;

		inputNumError.classList.toggle("section-form_enable", errorNum);

		inputNum.classList.toggle('section-form_border-orange', errorNum);

	}

	clearError() {

		inputTextError.classList.toggle("section-form_enable", false);

		inputNumError.classList.toggle("section-form_enable", false);

		inputText.classList.toggle('section-form_border-orange', false);

		inputNum.classList.toggle('section-form_border-orange', false)

	}

	saveStorageText(event) {


		let inputTexData = event.target.value;

		localStorage.setItem("userName", inputTexData);
	}

	saveStorageGrade(event) {

		let inputNumData = event.target.value;

		localStorage.setItem("grade", inputNumData);

	}

	checkForm() {

		for (let key in nameForm) {

			if (key) {
				alert('Форма успешно отправлена!')
			};

		};

	}

};

let form = document.querySelector('.section-form__frm');

let inputTop = form.querySelector('.section-form__top');

let inputText = form.querySelector('.section-form__input-text');

let inputTextError = form.querySelector('.input-error');

let inputNum = form.querySelector('.section-form__input-num');

let inputNumError = form.querySelector('.num-error');

let inputs = form.querySelectorAll('input'); //25

let nameForm = [];



let addReviewForm = new AddReviewForm(form, inputTop, inputText, inputTextError, inputNum, inputNumError, inputs, nameForm);

form.addEventListener('submit', addReviewForm.validForm);
form.addEventListener('submit', addReviewForm.checkForm);
inputText.addEventListener('focus', addReviewForm.clearError);
inputNum.addEventListener('focus', addReviewForm.clearError);
inputText.addEventListener('input', addReviewForm.saveStorageText);
inputNum.addEventListener('input', addReviewForm.saveStorageGrade);

window.onload = () => {

	let insertText = localStorage.getItem("userName");

	inputText.value = insertText;

	let insertNum = localStorage.getItem("grade");

	inputNum.value = insertNum;

};