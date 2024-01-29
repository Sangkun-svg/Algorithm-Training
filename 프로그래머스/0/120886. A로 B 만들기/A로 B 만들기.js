function solution(before, after) {
    const store = {};
    (before + after).split("").forEach((el) => {
        if(store[el]) store[el] += 1;
        else store[el] = 1
    })   
    return Object.values(store).reduce((acc ,cur) => acc + (cur % 2) , 0) === 0 ? 1 : 0
}