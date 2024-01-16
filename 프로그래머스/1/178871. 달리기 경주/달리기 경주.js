function solution(players, callings) {
    const rank = {};
    players.forEach((c,i) => rank[c] = i);
    for(const winner of callings){
        let winnerI = rank[winner];
        let loserI = winnerI - 1;

        rank[winner]--;
        rank[players[loserI]]++;

        players[winnerI] = players[loserI];
        players[loserI] = winner;
    }
    return players;
}
