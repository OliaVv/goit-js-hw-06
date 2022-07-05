//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const list = document.querySelector("ul");
console.log(list);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//const markup = (ingredients) => ingredients.map() =>`<li class="item">${ingredient}</li>`),"");
//console.log(markup(ingredients));

//list.insertAdjacentHTML("beforeend", markup(ingredients));

const markup = (ingredients) => 
{return ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = `${ingredient}`;
  return listItem;
} )
}
const ingredientsList = markup(ingredients)
list.append(...ingredientsList);