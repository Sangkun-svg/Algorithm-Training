function solution(cards1, cards2, goal) {
    return goal.map(str => {
        if(str === cards1[0]) return !!cards1.shift()
        else if(str === cards2[0]) return !!cards2.shift()
        else return false;
    }).every(v => !!v) ? "Yes" : "No"
    
}