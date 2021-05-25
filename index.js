const config = {
    colors: ['e4fbff','b8b5ff','7868e6','edeef7','0a043c', '03506f', 'a3ddcb', 'ffe3de', '71c9ce', 'a6e3e9', 'cbf1f5','e4f9f5','30e3ca','11999e','40514e','a8e6cf','dcedc1','ffd3b6','ffaaa5','defcf9','cadefc','c3bef0','cca8e9'],
    shapes: ['circle', /* 'triangle',  'square'*/],
    delay: {
        min: 0,
        max: 10
    },
    duration: {
        min: 10,
        max: 15
    },
    size: {
        min: 10,
        max: 120
    }
};

let background = document.createElement('div');
background.classList.add('background');
document.body.appendChild(background);

let list = document.createElement('ul');
list.classList.add('figures');
background.appendChild(list);

let sizes = getListRange(config.size);
let colors = config.colors;
let shapes = config.shapes;
let delays = getListRange(config.delay);
let positions = getListRange({ min: 0, max: 100 });
let durations = getListRange(config.duration);
let numberOfItems = getItemsFromContainerSize();

let elementList = fillList(numberOfItems);
elementList.forEach((element) => randomElement(element));
elementList.forEach((element) => list.appendChild(element)); 

function fillList(listLength = 10) {
    let elements = [];
    for (let index = 0; index < listLength; index++) {
        let currentElement = document.createElement('li');
        elements.push(currentElement);
    }
    return elements;
}

function randomElement(element) {
    element.classList.add("figure");

    let randomSize = getRandom(sizes) + 'px';
    let randomPosition = getRandom(positions);
    let randomColor = getRandom(colors);
    let randomDelay = getRandom(delays);
    let randomDuration = getRandom(durations);
    let randomShape = getRandom(shapes);

    element.style.width = randomSize;
    element.style.height = randomSize;
    element.style.left = randomPosition + '%';
    element.style['background-color'] = '#' + randomColor;
    element.style['animation-delay'] = randomDelay + 's';
    element.style['animation-duration'] = randomDuration + 's';
    element.classList.add(randomShape);
}

function getListRange({ min = 0, max }) {
    let range = [];
    for (let index = min; index < max; index++) {
        range.push(index);
    }
    return range;
}

function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function getItemsFromContainerSize() {
    let containerStyle = getComputedStyle(background);
    let width = containerStyle.width.replace('px', '');
    return Math.floor(width / 15);
}


