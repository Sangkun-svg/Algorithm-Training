function solution(arr) {
    const result = []
    let currentIdx = 0;
    while(arr.length > currentIdx) {
        const el = arr[currentIdx];
        if(result.at(-1) !== el){
            result.push(el)
        }
        currentIdx += 1;
    }    
    return result
}