function solution(my_string , regEx = /[aeiou]/g) {
    return my_string.replace(regEx, "");
}