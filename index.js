import config from './backgrounConfig.js';

let container = document.querySelector('.container');
let list = document.createElement('ul');
list.classList.add('figures');

let elementList = fillList(config.numberOfItems);
container.appendChild(list);

let sizes = getListRange(config.size);
let positions = getListRange({ min: 0, max: 100 });
let colors = config.colors;
let delays = getListRange(config.delay);
let durations = getListRange(config.duration);

elementList.forEach((element) => randomElement(element));
elementList.forEach((element) => list.appendChild(element));

function fillList(listLength = 3) {
    let elements = [];
    for (let index = 0; index < listLength; index++) {
        let currentElement = document.createElement('li');
        elements.push(currentElement);
    }
    return elements;
}

function randomElement(element) {
    let randomSize = getRandom(sizes) + 'px';
    let randomPosition = getRandom(positions);
    let randomColor = getRandom(colors);
    let randomDelay = getRandom(delays);
    let randomDuration = getRandom(durations);

    console.log(randomSize, randomPosition);
    element.style.width = randomSize;
    element.style.height = randomSize;
    element.style.left = randomPosition + '%';
    element.style['background-color'] = '#' + randomColor;
    element.style['animation-delay'] = randomDelay + 's';
    element.style['animation-duration'] = randomDuration + 's';
}

function getListRange({ min = 0, max }) {
    console.log(min, max);
    let range = [];
    for (let index = min; index < max; index++) {
        range.push(index);
    }
    return range;
}

function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

console.log(config);
console.log(container);
