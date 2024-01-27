function solution(s) {
    let count = 0, zeroCount = 0;
    while(true){
        count++;
        zeroCount += s.split("").filter(el => el === "0").length;
        s = s.replaceAll("0", "").length.toString(2)
        if(s === "1") break;
    }
    return [count,zeroCount]
}