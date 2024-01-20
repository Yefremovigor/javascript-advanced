'use strict';

/*
Создать обертку над navigator.geolocation.getCurrentPosition что бы работать с ним как с промисом
 */

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getCurrentPosition()
    .then(position => console.log(position))
    .catch(err => console.log(err));