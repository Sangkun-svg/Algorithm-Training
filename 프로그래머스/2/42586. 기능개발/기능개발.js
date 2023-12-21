function solution(A, B) {
    const result = [];
    const progresses = [...A]
    const speeds = [...B]
    while(progresses.length > 0){
        for(let i = 0; i < progresses.length; i++){
            progresses[i] = progresses[i] + speeds[i]
        }
        if(progresses[0] >= 100) {
            let count = 1;
            while(true){
                if(progresses[count] >= 100) count++;
                else break;
            }
            result.push(count)
            for(let i = 0; i < count; i++){
                progresses.shift();
                speeds.shift();
            }
        }
    }
    return result;
}

