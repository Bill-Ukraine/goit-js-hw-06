const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', blurBorder);
 function blurBorder (e) {
    const inputValue = Number(inputEl.value.length);
    console.log(inputValue);
    if (inputValue === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
