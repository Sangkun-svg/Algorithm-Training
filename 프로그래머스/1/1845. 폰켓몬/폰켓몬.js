function solution(pokemons) {
    const limit = pokemons.length / 2;
    const map = new Map();
    for(const pokemon of pokemons){
        map.set(pokemon, (map.get(pokemon) || 0) + 1)
    }
    return [...map.keys()].length > limit ? limit : [...map.keys()].length
}