function solution(my_string , regEx = /[aeiou]/) {
    return my_string.split("").filter(el => el.replace(regEx, "")).join("")
}