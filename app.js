'use strict';

function dice(type) {
    let max;
    switch (type) {
        case 'd4':
            max = 4;
            break;
        case 'd6':
            max = 6;
            break;
        case 'd8':
            max = 8;
            break;
        case 'd10':
            max = 10;
            break;
        case 'd12':
            max = 12;
            break;
        case 'd20':
            max = 20;
            break;
        default:
            return false;

    }

    return Math.floor(Math.random() * max + 1);
}

console.log(dice('d4'));
console.log(dice('d6'));
console.log(dice('d8'));
console.log(dice('d10'));
console.log(dice('d12'));
console.log(dice('d20'));
console.log(dice('d100'));