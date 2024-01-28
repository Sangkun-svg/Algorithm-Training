function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => {
        if(cur) return acc + a + (idx * d);
        else return acc;
    },0);
}