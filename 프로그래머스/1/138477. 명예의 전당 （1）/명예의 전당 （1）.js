function solution(k, scores) {
    let scoreList = [];
    const result = [];
    scores.forEach(score => {
        if(scoreList.length < k) {
            scoreList.push(score)
        }
        else if(score > scoreList.at(-1)) {
            const deleteScore = scoreList.pop();
            scoreList[k - 1] = score;
        }
        scoreList.sort((a,b) => b - a);
        result.push(Math.min(...scoreList));
    })   
    return result
}