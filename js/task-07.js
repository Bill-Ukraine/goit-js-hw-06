const inputVolume = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputVolume.addEventListener('input',volumeControl);

function volumeControl(e) {
    inputText.style.fontSize = e.currentTarget.value + 'px'
};