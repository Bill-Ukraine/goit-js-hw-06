function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const textColor = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');
const bgdColor = document.querySelector('body');

btnColor.addEventListener('click', changeColor);

function changeColor() {
  textColor.textContent = getRandomHexColor();
  bgdColor.style.backgroundColor = textColor.textContent;
}