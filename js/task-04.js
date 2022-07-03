//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.


const counter = document.querySelector("#value");

const decBtn = document.querySelector(
    'button[data-action="decrement"]'
    );

const incBtn = document.querySelector(
    'button[data-action="increment"]'
    );
let counterValue = 0;
function decValue() {
   counterValue -=1 ;
   return counter.textContent = counterValue;
};
function incValue() {
    counterValue +=1 ;
    return counter.textContent = counterValue;
};

decBtn.addEventListener("click", decValue);
incBtn.addEventListener("click", incValue);





