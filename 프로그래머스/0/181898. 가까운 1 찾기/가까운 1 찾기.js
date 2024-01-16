function solution(arr, idx) {
    return arr.findIndex((el,i) => (i >= idx && el === 1))
}