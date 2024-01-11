function solution(n) {
    if(n % 2 === 0){
        return Array.from({length : n} , ((_,idx) => n - idx))
                .filter(n => n % 2 === 0)
                .map(n => n ** 2)
                .reduce((a,b) => a + b);
    }else {
        return Array.from({length : n} , ((_,idx) => n - idx))
                .filter(n => n % 2 !== 0)
                .reduce((a,b) => a + b);
    }
}