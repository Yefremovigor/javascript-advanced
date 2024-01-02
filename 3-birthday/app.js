'use strict';

function isOlder14Years(date) {
    const birthDate = new Date(date);
    const  currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear() - 14, currentDate.getMonth(), currentDate.getDate());

    return birthDate < targetDate;
}

console.log(isOlder14Years('2022-01-01'));
console.log(isOlder14Years('2000-01-01'));
console.log(isOlder14Years('2009-01-01'));
console.log(isOlder14Years('2010-01-01'));
console.log(isOlder14Years('2010-01-02'));