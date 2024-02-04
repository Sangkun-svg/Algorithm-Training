function solution(str, m, c) {
    return Array.from({length : Math.floor(str.length / m)}, (_,idx) => str.slice(idx*m, (idx+1)*m)[c -1]).join("");
}