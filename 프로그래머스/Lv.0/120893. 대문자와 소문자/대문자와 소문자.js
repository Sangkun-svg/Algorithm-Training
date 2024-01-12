function solution(my_string) {
    return my_string.split("").map(el => el.charCodeAt() <= 90 ? el.toLowerCase() : el.toUpperCase()).join("")   
}