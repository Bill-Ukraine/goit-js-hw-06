const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsElemEl = document.querySelector("#ingredients");

const ingredientsEl = ingredients.forEach((el) => {
  const liItemEl = document.createElement("li");
  liItemEl.classList.add("item");
  const liTextEl = liItemEl.append(el);
  console.log(liItemEl);
  ingredientsElemEl.append(liItemEl);
});
