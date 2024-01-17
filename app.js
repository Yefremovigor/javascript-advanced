'use strict';

/*
Сделать запрос к https://pokeapi.co/api/v2/pokemon/ditto
получить информацию о первой ability по ссылки
найти описание на английском
вывести описание в консоль
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function () {
    if (this.status !== 200) {
        return;
    }

    const pokemonData = JSON.parse(this.responseText);
    const pokemonAbilities = pokemonData.abilities;
    const firstAbility = pokemonAbilities[0];
    const abilityURL = firstAbility.ability.url;

    const request = new XMLHttpRequest();
    request.open('GET', abilityURL);
    request.send();

    request.addEventListener('load', function () {
        if (this.status !== 200) {
            return
        }

        const abilityData = JSON.parse(this.responseText);
        const abilityEffects = abilityData.effect_entries;
        const englishEffect = abilityEffects.find(effect => effect.language.name === 'en').effect;
        console.log(englishEffect);
    })

    request.addEventListener('error', function () {
        console.log('error');
    });
});
request.addEventListener('error', function () {
    console.log('error');
});