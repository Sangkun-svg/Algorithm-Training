function solution(n, lost, reserve) {
    const map = new Map(Array.from({ length: n }, (_, i) => [i + 1, 1]));
    lost.forEach((el) => map.set(el, map.get(el) - 1));
    reserve.forEach((el) => map.set(el, map.get(el) + 1));
    lost.sort((a,b) => a - b).filter((el) => !reserve.includes(el)).forEach(el => {
        if(map.has(el - 1) && map.get(el - 1) > 1) {
            map.set(el, 1);
            map.set(el - 1, 1);
        }else if(map.has(el + 1) && map.get(el + 1) > 1) {
            map.set(el, 1);
            map.set(el + 1, 1);
        }
    })
    return [...map.values()].filter(el => el > 0).length
}
