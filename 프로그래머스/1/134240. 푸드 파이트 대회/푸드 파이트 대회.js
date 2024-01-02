function solution(food, result = []) {
    const arr = food.slice(1)
    .map(v => v % 2 !== 0 ? v -1 : v)
    .map((v,i) => {
        return String(i+1).repeat(v / 2)
    })
    return [...arr, 0 , ...arr.reverse()].join("")
}
