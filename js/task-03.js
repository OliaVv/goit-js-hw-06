//Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

//<ul class="gallery"></ul>
//Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const image = document.createElement("img");
//console.log(image);
const gallery = images.reduce((acc, image) => (acc + `<li class="item"><img class="image" src="${image.url}" alt="${image.alt}" width = "400px" height = "280px"></li>`),"");
//console.log(gallery);

//const gallery = images => 
//{return images.map(image =>{
// const item = document.createElement("li");
//  item.classList.add("item");
//const imageItem = document.createElement("img");
//  imageItem.src = image.url;
//  imageItem.alt = image.alt;
//  item.append(imageItem);
//return item;
//})
//}

const list = document.querySelector(".gallery")
console.log(list);

list.insertAdjacentHTML("beforeend", gallery);
list.style.display = "flex";
list.style.listStyle = "none";

//const item = document.querySelectorAll(".item");
//item.style.decorationStyle = "none";
//item.style.gap = "30px";
//image.style.objectFit = "cover";

//image.style.width = "250px";