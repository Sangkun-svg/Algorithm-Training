function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1];
    const fixedNumbers = lottos.filter(el => win_nums.includes(el)).length;
    const volatility = lottos.filter(el => !el).length;
    return [rank[fixedNumbers + volatility], rank[fixedNumbers]];
}