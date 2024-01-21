function solution(sentence, result = 0) {
    const map = new Map();
    let currentChar = sentence[0];
    sentence.split("").forEach((str,index) => {
        map.set(str, (map.get(str) || 0) + 1);
        if(map.size <= 2){
            const [withoutX] = [...map].filter(([key]) => key !== currentChar).map(([_, value]) => value);
            if(map.get(currentChar) == withoutX) {
                result += 1;
                map.clear();
                currentChar = sentence[index + 1];
            }
        }else {
            const withoutX = [...map]
                .filter(([key]) => key !== currentChar)
                .reduce((acc, [_, value]) => acc + value, 0);
            if(map.get(currentChar) == withoutX) {
                result += 1;
                map.clear();
                currentChar = sentence[index + 1];
            }
        }  
    })
    if(map.size > 0) result += 1;
    return result;
}