function solution(number, limit, power) {
    return Array.from({length : number}, (_,idx) => idx + 1).map(number => {
        let count = 0;
        for (let i = 1; i * i <= number; i++) {
            if (i * i == number) count++;
            else if (number % i == 0) count += 2;
        }
        return count > limit ? power : count;
    }).reduce((a,b) => a + b);
}
