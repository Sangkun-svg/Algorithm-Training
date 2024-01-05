function solution(slice, n, k = 0) {
    while(true){
        if(slice * k >= n) break;
        k = k + 1;
    }
    return k
}