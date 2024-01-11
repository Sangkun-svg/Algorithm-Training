function solution(n, k, result = []) {
    for(let i = k; i <= n; i += k) result.push(i);
    return result;
}