function solution(str, n) {
    if(str.length <= n) return [str];
    const result = [];
    for(let i = 0; i < str.length; i += n){
        result.push(str.slice(i, i+n))
    }
    return result;
}