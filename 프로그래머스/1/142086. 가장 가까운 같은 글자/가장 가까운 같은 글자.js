function solution(s) {
    const map = new Map();
    return [...s].map((v,idx) => {
        if(!map.has(v)) {
            map.set(v, 1)
            return -1
        }
        return idx - [...s].slice(0, idx).lastIndexOf(v)
    })
}