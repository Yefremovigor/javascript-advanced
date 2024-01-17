'use strict';

function dice(type) {
    const diceSide = {
        d4: 4,
        d6: 6,
        d8: 8,
        d10: 10,
        d12: 12,
        d20: 20
    };

    if (!diceSide.hasOwnProperty(type)) {
        return null;
    }

    const max = diceSide[type];

    return Math.floor(Math.random() * max + 1);
}

console.log(dice('d4'));
console.log(dice('d6'));
console.log(dice('d8'));
console.log(dice('d10'));
console.log(dice('d12'));
console.log(dice('d20'));
console.log(dice('d100'));