function solution(array) {
    return array.flatMap(number => String(number).split("")).filter(el => el == 7).length;
}