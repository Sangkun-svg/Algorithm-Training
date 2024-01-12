function solution(strArr) {
    return strArr.map((str,idx) => (idx + 1) % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}