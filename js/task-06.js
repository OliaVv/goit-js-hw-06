//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputTxt = document.querySelector("#validation-input");

inputTxt.addEventListener("blur", validation);

const txtLength = +inputTxt.dataset.length;

function validation(event) {
if (event.currentTarget.value.length === txtLength) {
    inputTxt.classList.add("valid");
} else {inputTxt.classList.add("invalid");}
};