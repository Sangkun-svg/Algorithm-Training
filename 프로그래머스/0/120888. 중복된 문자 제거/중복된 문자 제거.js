function solution(my_string, store = {}) {
    return my_string.split("").reduce((acc, cur) => {
        if (!acc.includes(cur)) return acc + cur;
         else return acc;
    }, "");
}
