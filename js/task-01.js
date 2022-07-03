//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const list = document.querySelectorAll("li.item");
console.log("Number of categories:", list.length);
//const listTitle = document.querySelectorAll("h2");
list.forEach(title => {
console.log(`Category: ${title.querySelector("h2").textContent}
Elements: ${title.querySelectorAll("li").length}`); });


//const list = document.querySelectorAll(".item");
//console.log("Number of categories:", list.length);
//list.forEach((element) => {
////    return console.log(`Category: ${element.querySelector("h2").textContent}
//Elements:${element.querySelectorAll("li").length}`);})