const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    }

};
const counterValueEl = document.querySelector('#value');
const btnDecEl = document.querySelector('button[data-action="decrement"]');
const btnIncEl = document.querySelector('button[data-action="increment"]');


btnDecEl.addEventListener('click', function() {
    counterValue.decrement()
    counterValueEl.textContent = counterValue.value;
}) ;
btnIncEl.addEventListener('click', function() {
    counterValue.increment();
counterValueEl.textContent = counterValue.value;
});
