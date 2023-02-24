const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
let clickQuantity = 0;
function makeGreen() {
    trafficLightEl.style.background = 'green';
    trafficLightEl2.style.background = '';
    trafficLightEl3.style.background = '';
    clickQuantity += 1;
}
function makeYellow() {
    trafficLightEl2.style.background = 'yellow';
    trafficLightEl.style.background = '';
    trafficLightEl3.style.background = '';
    clickQuantity += 1;
}
function makeRed() {
    trafficLightEl3.style.background = 'red';
    trafficLightEl.style.background = '';
    trafficLightEl2.style.background = '';
    clickQuantity = 0;
}
function getCircle() {
    switch (clickQuantity) {
        case 0: makeGreen();
            break;
        case 1: makeYellow();
            break;
        case 2: makeRed();
            break;
    }
}
trafficLightEl.addEventListener('click', getCircle);
trafficLightEl2.addEventListener('click', getCircle);
trafficLightEl3.addEventListener('click', getCircle); (edited) 