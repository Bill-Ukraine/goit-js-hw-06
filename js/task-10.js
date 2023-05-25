function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('[type="number"]');
const buttonDataEl = document.querySelector('button[data-create]');
const resetEl = document.querySelector('button[data-destroy]');
const divEl = document.getElementById('boxes');

buttonDataEl.addEventListener('click', () => {
  createBoxes(inputEl.value.trim());
});

function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxes.push(div);
  }
  divEl.insertAdjacentHTML('beforeend', boxes.join(''));
}

resetEl.addEventListener('click', removeBoxes);

function removeBoxes() {
  inputEl.value = '';
  divEl.innerHTML = '';
}