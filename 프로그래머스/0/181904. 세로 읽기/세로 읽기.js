function solution(str, m, c) {
    return [...str].filter((_,idx) => idx % m === c - 1).join("");
}