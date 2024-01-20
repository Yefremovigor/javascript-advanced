'use strict';

/*
Создать функцию race(), которая будет принимать массив Promise, и возвращать первый успешно выполненный или отклоненный.
*/

function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    });
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise 3'));

(async () => {
    try {
        const result = await race([promise1, promise2, promise3]);
        console.log('Resolved:', result);
    } catch (error) {
        console.log('Rejected:', error);
    }
})();