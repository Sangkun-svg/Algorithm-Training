function solution(k, scores, scoreList = []) {
    return scores.map(score => {
        if(scoreList.length < k) scoreList.push(score);
        else if(score > scoreList.at(-1)) scoreList[k - 1] = score;
        scoreList.sort((a,b) => b - a);
        return Math.min(...scoreList);
    })
}