let timer = 0;
let counter = document.getElementById('counter');
let timerId = '';

function start() {
    //При нажатии на кнопку старт запускается таймер
    timerId = setInterval(() => {
    // Прибавить к таймеру 1 
    timer++;
    // Записать в HTML значение переменной timer
    counter.innerText = timer;
    }, 1000)
}

function reset() {
    clearInterval(timerId);
    timer = 0;
    counter.innerText = timer;
}

function pause() {
    clearInterval(timerId)
}