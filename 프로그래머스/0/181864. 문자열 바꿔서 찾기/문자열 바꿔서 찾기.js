function solution(myString, pat) {
    return Number(myString.includes(pat.split("").map(el => el == "A" ? "B" : "A").join("")))
}