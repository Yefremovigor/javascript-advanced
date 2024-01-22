'use strict';

const counter = document.querySelector('.counter');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    for (const element of [...wrapper.children]) {
        if (element === event.target) {
            element.classList.add('active');
            element.innerText = 'Нажата!'
        } else {
            element.classList.remove('active');
            element.innerText = 'Нажми меня';
        }
    }

    counter.innerText = Number(counter.innerText) + 1;
})