//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const buttonChange = document.querySelector("button");

buttonChange.addEventListener("click", colorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textColor = document.querySelector(".color");

function colorChange() {
  let color = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${color}`)
  textColor.textContent = color;
}