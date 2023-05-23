const categoriesEl = document.querySelectorAll(".item");
const categoriesLength = `Number of categories:${categoriesEl.length}`;
console.log(categoriesLength);

const catEl = categoriesEl.forEach((el) => {
  const listItemEl = el.firstChild.nextSibling.textContent;
  const listItemLengthEl = el.lastElementChild.children.length;
  console.log(`Category:${listItemEl} Elements:${listItemLengthEl}`);
});
