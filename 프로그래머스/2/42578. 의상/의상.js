function solution(clothes , answer = 1) {
    const map = new Map();
    clothes.forEach(([value, key]) => map.set(key, (map.get(key) || 1) + 1));
    for(const [_,v] of map) {
        answer *= v
    }
    return answer - 1;
}