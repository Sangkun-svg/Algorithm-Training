function solution(my_string, is_suffix, result = []) {
    for(let i = 0; i < my_string.length; i++) {
        result.push(my_string.slice(i, my_string.length));
    }
    return Number(result.includes(is_suffix));
}