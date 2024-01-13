function solution(s){
    return s.split(" ").map(str => {
        return str.split("").map((el,idx) => {
            if(idx === 0) return el.toUpperCase();
            else return el.toLowerCase();
        }).join("")
    }).join(" ");
}