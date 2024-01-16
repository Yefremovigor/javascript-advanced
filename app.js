'use strict';

/*
Спроектировать класс Billing со свойством amount и методом calculateTotal для расчёта счёта.
Сделать разный calculateTotal для разных типов:
- fixBilling - возвращает amount
- hourBilling - возвращает amount * число часов
- itemBilling - возвращает amount * число элементов
 */

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items.length;
    }
}


const fixBilling = new Billing(100);
console.log(fixBilling.calculateTotal());

const hourBilling = new HourBilling(100, 10);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(100, [1, 2, 3]);
console.log(itemBilling.calculateTotal());