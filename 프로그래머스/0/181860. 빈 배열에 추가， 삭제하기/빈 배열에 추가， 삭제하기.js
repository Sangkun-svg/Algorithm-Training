function solution(arr, flag) {
    return arr.reduce((prev, num, idx) => 
        flag[idx] ? [...prev , ...new Array(num * 2).fill(num)] : prev.slice(0, -num)
     , [])
}