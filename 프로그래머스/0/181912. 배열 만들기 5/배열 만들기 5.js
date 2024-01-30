function solution(intStrs, k, s, l) {
    return intStrs.map(intStr => Number(intStr.slice(s,s+l))).filter(number => number > k);
}