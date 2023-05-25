const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', blurBorder);
 function blurBorder (e) {
    const inputValue = Number(inputEl.value.length);
    console.log(inputValue);
    if (inputValue === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } if (inputValue === 0) {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
    } if (inputValue !== 6 && inputValue !== 0) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
