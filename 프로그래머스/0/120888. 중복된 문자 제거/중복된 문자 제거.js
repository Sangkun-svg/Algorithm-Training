function solution(my_string,store = {}) {
     my_string.split("").forEach((el) => {
        if(!store[el]) store[el] = true;
    })
    return Object.keys(store).join("");
}