function solution(lottos, win_nums) {
    const rank = { 6: 1 , 5 : 2 , 4 : 3 , 3: 4 , 2: 5, 1: 6, 0 : 6};
    const map = new Map();
    const volatility = lottos.filter(el => !el).length;
    win_nums.forEach(number => map.set(number, 1));
    lottos.filter(number => !!number).forEach(el => {
        win_nums.includes(el) ? map.set(el , map.get(el) + 1) : null;
    })
    const fixedNumbers = [...map.values()].filter(el => el === 2).length;
    return [rank[fixedNumbers + volatility], rank[fixedNumbers]];
}