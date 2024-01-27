function solution(s) {
    let result = [0,0];
    while(s.length > 1){
        result[0]++;
        result[1] += s.split("").filter(el => el === "0").length;
        s = s.replaceAll("0", "").length.toString(2)
    }
    return result
}