function solution(str1, str2) {
    return [...str1].map((_,idx) => _ + str2[idx]).join("");
}