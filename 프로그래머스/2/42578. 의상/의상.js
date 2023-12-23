function solution(clothes) {
    let result = 1;
    const map = new Map();
    clothes.forEach(([value, key]) => map.set(key, (map.get(key) || 1) + 1));
    console.log(map)
    for(const [_,v] of map) {
        result *= v
    }
    return result - 1;
}