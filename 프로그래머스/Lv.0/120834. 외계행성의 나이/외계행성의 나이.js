function solution(age, defaultValue = 97) {
    return String(age).split("").map(str => String.fromCharCode(97 + Number(str))).join("");
}