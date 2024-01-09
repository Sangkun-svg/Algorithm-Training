function solution(my_string) {
    return my_string.split("").filter(el => !isNaN(el)).map(Number).reduce((a,b) => a+b);
}