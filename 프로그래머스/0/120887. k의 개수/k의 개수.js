function solution(i, j, k) {
    return Array.from({length : j - i + 1}, (_,idx) => String(i + idx))
    .flatMap(str => str.split(""))
    .filter(str => str == k).length;
}
