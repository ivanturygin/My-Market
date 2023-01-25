'use strict'

let form = document.querySelector('.section-form__frm');

let inputTop = form.querySelector('.section-form__top');

let inputText = form.querySelector('.section-form__input-text');

let inputTextError = form.querySelector('.input-error');

let inputNum = form.querySelector('.section-form__input-num');

let inputNumError = form.querySelector('.num-error');

let inputs = form.querySelectorAll('input');



function handleSubmit(event) {

  event.preventDefault()

  let name = inputText.value;

  let num = +inputNum.value;

  //text

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

  //num

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

    localStorage.removeItem("userName");
    localStorage.removeItem("grade");

  };

  document.querySelector('.num-error__text').innerText = errorNum;

  inputNumError.classList.toggle("section-form_enable", errorNum);

  inputNum.classList.toggle('section-form_border-orange', errorNum);

};


function handleFocus() {

  inputTextError.classList.toggle("section-form_enable", false);

  inputNumError.classList.toggle("section-form_enable", false);

  inputText.classList.toggle('section-form_border-orange', false);

  inputNum.classList.toggle('section-form_border-orange', false)

};

inputText.addEventListener('focus', handleFocus);

inputNum.addEventListener('focus', handleFocus);

form.addEventListener('submit', handleSubmit);


function handleSaveText(event) {

  let inputTexData = event.target.value;

  localStorage.setItem("userName", inputTexData);

};

function handleSaveNum(event) {

  let inputNumData = event.target.value;

  localStorage.setItem("grade", inputNumData);

};


for (let i = 0; i < inputs.length; i++) {

  if (i == 2) continue;

  inputs[0].addEventListener('input', handleSaveText);

  inputs[1].addEventListener('input', handleSaveNum);

};


let buttomCart = document.querySelector('.basket__button');

let counterCart = document.querySelector('.header-basket__counter');

let counterCartNumber = document.querySelector('.header-basket__number');

let idData;

let insertCart;


let cart = [];


let product = {

  name: 'Смартфон Apple iPhone 13',

  id: 1415,

};

/**
returns the id from the object
 * @param {object}obj
 * @returns
 */

function getId(obj) {

  if ('id' in obj) {

    idData = obj.id;

  };

};


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

    buttomCart.innerText = 'Товар уже в корзине';

    buttomCart.classList.toggle("basket__button_color");

    buttomCart.classList.toggle("no-hover");

    buttomCart.classList.toggle("no-active");

    localStorage.setItem("cart", idData);
  }

};


/**
 * removes items from cart
 * @param {number}(removeId)
 * @returns {object} cart
 */

function removeFromCart(removeId) {

  if (!Number(removeId)) {

    return;

  } else {

    cart = cart.filter(id => id !== removeId)

    buttomCart.innerText = 'Добавить в корзину';

    buttomCart.classList.toggle("basket__button_color", false);

    buttomCart.classList.toggle("no-hover", false);

    buttomCart.classList.toggle("no-active", false);


    localStorage.removeItem("cart");

  }
};


/**
changes the cart counter
 */

function counter() {

  let count = cart.length

  counterCartNumber.innerText = count;

  if (count > 0) {

    counterCart.classList.add("counter_enabled");

  };

  if (count === 0) {

    counterCart.classList.remove("counter_enabled");

  };

};


function handleClickButtom() {

  getId(product);

  if (!cart.includes(idData)) {

    addToCart(idData);

  } else {

    removeFromCart(idData)

  };

  counter()

};


buttomCart.addEventListener('click', handleClickButtom);


window.onload = () => {

  let insertText = localStorage.getItem("userName");

  inputText.value = insertText;

  let insertNum = localStorage.getItem("grade");

  inputNum.value = insertNum;

  insertCart = localStorage.getItem("cart");

  addToCart(+insertCart);

  counter();

};