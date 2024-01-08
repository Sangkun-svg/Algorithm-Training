function solution(n, result = []) {
    for(i = 1; i <= n; i += 2){
        result.push(i)
    }
    return result;
}