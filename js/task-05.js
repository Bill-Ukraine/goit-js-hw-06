const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputChange = ({currentTarget}) => {
  if (currentTarget.value !== '') {
    spanEl.textContent = currentTarget.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
inputEl.addEventListener("input", onInputChange);
