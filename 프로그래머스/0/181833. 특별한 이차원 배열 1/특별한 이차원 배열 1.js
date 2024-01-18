function solution(n) {
    return Array.from({length : n}, (_,i) => Array.from({length : n }, (_,idx) => i === idx ? 1 : 0));
}