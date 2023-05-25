const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsElemEl = document.querySelector("#ingredients");

const ingredientsEl = ingredients.map((ingredients) => {
  const liItemEl = document.createElement("li");
  liItemEl.classList.add("item");
  liItemEl.textContent = ingredients;
  return liItemEl;
});
ingredientsElemEl.append(...ingredientsEl);
