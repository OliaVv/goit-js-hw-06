//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputSize = document.querySelector("#font-size-control");
const txtSize = document.querySelector("#text");
txtSize.classList.add("text");
inputSize.addEventListener("input", fontSizeSet);
console.log(inputSize);
console.log(txtSize);
function fontSizeSet(event) {
//console.log(event.currentTarget.value);
    txtSize.style.fontSize = `${event.currentTarget.value}px`;
}
    
