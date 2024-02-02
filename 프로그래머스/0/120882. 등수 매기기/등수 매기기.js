function solution(scores) {
    return scores.map(([math, en]) => (math + en) / 2).map((average, idx, array) => {
        const sameAverageCount = array.filter(score => score === average).length;
        const higherOrEqualCount = array.filter(score => score >= average).length;
        return higherOrEqualCount - sameAverageCount + 1;
    });
}
