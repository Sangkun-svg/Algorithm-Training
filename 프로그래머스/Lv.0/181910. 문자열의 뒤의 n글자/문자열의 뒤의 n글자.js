function solution(my_string, n) {
    return my_string.slice(Math.abs(n - my_string.length));
}