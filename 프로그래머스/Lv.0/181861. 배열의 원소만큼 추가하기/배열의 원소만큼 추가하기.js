function solution(arr) {
    const result = [];
    arr.map(el => Array.from({length: el}).forEach(_ => result.push(el)))
    return result
}