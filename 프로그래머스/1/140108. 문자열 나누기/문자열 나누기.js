function solution(sentence, result = 0) {
    const map = new Map();
    let x = sentence[0]; // currentChar
    sentence.split("").forEach((str,index) => {
        map.set(str, (map.get(str) || 0) + 1);
        if(map.size <= 2){
            const [withoutX] = [...map].filter(([key]) => key !== x).map(([_, value]) => value);
            if(map.get(x) == withoutX) {
                result += 1;
                map.clear();
                x = sentence[index + 1];
                // x = index + 1 < sentence.length ? sentence[index + 1] : null;
            }
        }else {
            const withoutX = [...map].filter(([key]) => key !== x)
            .reduce((acc, [_, value]) => acc + value, 0);
            if(map.get(x) == withoutX) {
                result += 1;
                map.clear();
                x = sentence[index + 1];
            }
        }  
    })
    if(map.size > 0) result += 1;
    return result;
}