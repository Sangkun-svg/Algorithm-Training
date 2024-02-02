function solution(array) {
    const map = new Map();
    array.forEach(el => map.set(el, (map.get(el) || 0) + 1));
    const maxValue = Math.max(...map.values());
    if(map.size == 1) return array[0];
    if([...map.values()].filter(el => el === maxValue).length > 1) return -1;
    return [...map].sort((a,b) => b[1] - a[1])[0][0]
}