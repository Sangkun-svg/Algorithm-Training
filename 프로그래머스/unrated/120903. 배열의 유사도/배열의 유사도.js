function solution(s1, s2) {
    const map = new Map();
    [...s1 , ...s2].forEach(el => map.set(el, (map.get(el) || 0) + 1));
    return [...map.values()].filter(value => value > 1).length;
}