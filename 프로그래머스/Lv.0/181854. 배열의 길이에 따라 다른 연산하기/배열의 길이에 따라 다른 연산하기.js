function solution(arr, n) {
    return arr.map((el , i) => {
        if(arr.length % 2 === 0) return i % 2 !== 0 ? el + n : el;
        else return i % 2 === 0 ? el + n : el;
    })
}
