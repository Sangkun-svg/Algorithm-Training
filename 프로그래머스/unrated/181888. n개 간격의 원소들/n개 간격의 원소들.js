function solution(numbers, n) {
    return numbers.filter((number,idx) => idx % n ===0)
}