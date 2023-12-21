function solution(numbers) {
    const odd = numbers.filter(number => number % 2 !== 0).join("")
    const even = numbers.filter(number => number % 2 === 0).join("")
    return Number(odd) + Number(even) 
}