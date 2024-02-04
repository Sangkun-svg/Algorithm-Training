function solution(arr, flag) {
    const result = [];
    flag.map((bool,idx) => {
        if(bool) return result.push(...Array.from({length: arr[idx] * 2}, () => arr[idx]));
        else return result.splice(result.length - arr[idx], result.length);
    })
    return result;
}