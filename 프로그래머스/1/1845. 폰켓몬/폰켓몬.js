function solution(pokemons) {
    const max = pokemons.length / 2;
    const { size : setSize } = new Set(pokemons);
    return setSize > max ? max : setSize
}