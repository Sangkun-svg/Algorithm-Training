function solution(numbers) {
    return Math.max(numbers.sort((a,b) => a - b).slice(0,2).reduce((a,c) => a * c) , 
        numbers.sort((a,b) => b - a).slice(0,2).reduce((a,c) => a * c))
}