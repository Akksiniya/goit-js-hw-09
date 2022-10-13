function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
};

console.log(refs.buttonStart);
console.log(refs.buttonStop);

let timerId = null;

refs.buttonStart.addEventListener('click', () => {
    timerId = setInterval(() => {
     refs.body.style.backgroundColor = getRandomHexColor();
     refs.buttonStart.disabled = true;
    }, 1000);

});

refs.buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    refs.buttonStart.disabled = false;
});

