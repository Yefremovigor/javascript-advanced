'use strict';

/*
создать таймер который каждую секунду выводит в консоль время до нового года в формате месяцы дни часы минуты секунды
 */

function getDifToNewYear() {
    const currentDate = new Date();

    const remainingMonths = 12 - (currentDate.getMonth() + 1);

    const endCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const seconds = ((endCurrentMonth.getTime() - currentDate.getTime()) / 1000);
    const remainingSeconds = Math.floor(seconds % 60);
    const minutes = (seconds - remainingSeconds) / 60;
    const remainingMinutes = Math.floor(minutes % 60);
    const hours = (minutes - remainingMinutes) / 60;
    const remainingHours = Math.floor(hours % 24);
    const remainingDays = Math.floor((hours - remainingHours) / 24);

    const result = `${remainingMonths} месяцев ${remainingDays} дней ${remainingHours} часов ${remainingMinutes} минут ${remainingSeconds} секунд`
    console.log(result)
}

setInterval(getDifToNewYear, 1000)