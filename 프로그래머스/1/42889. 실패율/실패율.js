function solution(N, stages, result = []) {
    for(let i = 1; i <= N; i++){
        const fails = stages.filter(stage => stage === i);
        stages = stages.filter(stage => stage >= i);
        result.push({index : i, persent : (fails.length / stages.length)});
    }
    return result.sort((a,b) => b.persent  - a.persent).map(v => v.index)
}

