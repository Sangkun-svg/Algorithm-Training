function solution(rsp, win = { "2" : "0" , "0" : "5" , "5" : "2"}) {
    return rsp.split("").map(el => win[el]).join("");
}