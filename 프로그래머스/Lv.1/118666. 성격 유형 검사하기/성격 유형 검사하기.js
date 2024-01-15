function solution(survey, choices) {
    const map = new Map();
    const ranks = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
    const kinds = [["R","T"],["C","F"],["J","M"],["A","N"]];
    kinds.forEach(kind => kind.map(str => map.set(str, 0)));
    survey.forEach((s,idx) => {
        const [typeA, typeB] = s.split("");
        if(choices[idx] > 4) map.set(typeB, map.get(typeB) + ranks[choices[idx]]);
        if(choices[idx] < 4) map.set(typeA, map.get(typeA) + ranks[choices[idx]]);
    })
    return kinds.map(kind => {
        const [typeA, typeB] = kind;
        if(map.get(typeA) === map.get(typeB)) return typeA.charCodeAt() < typeB.charCodeAt() ? typeA : typeB
        return map.get(typeA) > map.get(typeB) ? typeA : typeB;
    }).join("")
}