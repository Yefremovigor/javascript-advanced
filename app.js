'use strict';

/*
Сделать запрос к https://pokeapi.co/api/v2/pokemon/ditto
получить информацию о первой ability по ссылки
найти описание на английском
вывести описание в консоль
*/

function getData(url) {
    return fetch(url)
        .then(result => {
            if (!result.ok) {
                throw new Error(`Request failed with status ${result.status}`);
            }
            return result.json()
        })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(data => {
        const pokemonAbilities = data.abilities;
        const firstAbility = pokemonAbilities[0];
        const abilityURL = firstAbility.ability.url;
        return abilityURL;
    })
    .then(url => {
        return getData(url);
    })
    .then(data => {
        const abilityEffects = data.effect_entries;
        const englishEffect = abilityEffects.find(effect => effect.language.name === 'en').effect;
        console.log(englishEffect);
    })
    .catch(error => console.log(error));