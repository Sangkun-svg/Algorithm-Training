function solution(my_string) {
    return my_string.split("").filter(str => !isNaN(str)).map(Number).sort((a,b) => a - b);
}