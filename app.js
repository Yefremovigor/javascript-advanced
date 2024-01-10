'use strict';

/*
Создать класс Car у которого есть марка, модель, и пробег (приватные свойства, заданные в конструкторе)
- Сделать get и set для пробега.
- Сделать метод info который выводит в консоль марку, модель и пробег.
 */

class Car {
    #brand;
    #model;
    #distance;

    constructor(brand, model, distance) {
        this.#brand = brand;
        this.#model = model;
        this.#distance = distance;
    }

    get distance() {
        return this.#distance;
    }

    set distance(distance) {
        if (distance < this.#distance) {
            return;
        }

        this.#distance = distance;
    }

    info() {
        console.log(`Марка: ${this.#brand}, модель: ${this.#model}, пробег: ${this.#distance}`);
    }
}

const car = new Car('Audi', 'A6', 0);

console.log(car.distance);
car.distance = 100;

car.info();