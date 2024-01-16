function solution(my_string, condition = /[0-9]/g) {
    return my_string.match(condition).map(Number).sort((a,b) => a - b);
}