'use strict';

/*
Создать базовый класс Персонаж с параметрами: раса, имя, язык и методом - говорить, который выводит язык и имя в консоль.
Создать класс Орка, который наследуется от Персонажа, у которого есть оружие и который имеет метод - удар.
Создать класс Эльфа, который наследуется от Персонажа, у которого есть заклинания и метод - создать заклинание.

Использовать прототипное наследование.
 */

const Person = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}
Person.prototype.say = function () {
        console.log(`Язык: ${this.language}, Имя: ${this.name}`);
}

const Orc = function ( name, weapon) {
    Person.call(this, 'Orc', name, 'Orcish');
    this.weapon = weapon;
}
Orc.prototype = Object.create(Person.prototype);

Orc.prototype.hit = function () {
    console.log(`Удар ${this.weapon}`);
}

const Elf = function ( name, spell) {
    Person.call(this, 'Elf', name, 'Elvish');
    this.spell = spell;
}
Elf.prototype = Object.create(Person.prototype);

Elf.prototype.cast = function () {
    console.log(`Заклинание: ${this.spell}`);
}

const orc1 = new Orc('Gimli', 'Axel');
const elf1 = new Elf('Legolas', 'Fireball');

orc1.say();
orc1.hit();

elf1.say();
elf1.cast();
