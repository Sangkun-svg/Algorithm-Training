function solution(myString, pat) {
    return myString.split("").filter((_,idx,array) => array.slice(idx, idx + pat.length).join("") === pat).length;
}