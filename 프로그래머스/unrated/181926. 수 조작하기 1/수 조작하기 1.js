function solution(n, control) {
    for(const key of control){
        if(key === "w") n += 1;
        if(key === "s") n -= 1;
        if(key === "d") n += 10;
        if(key === "a") n -= 10;
    }
    return n
}