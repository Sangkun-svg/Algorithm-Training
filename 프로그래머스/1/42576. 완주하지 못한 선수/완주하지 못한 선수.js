function solution(participants, completions) {
    const map = new Map()
    for(let i = 0; i < participants.length; i++){
        const participant = participants[i]
        const completion = completions[i]

        map.set(participant, (map.get(participant) || 0) + 1)
        if(i < completions.length) map.set(completion, (map.get(completion) || 0) - 1)
    }
    
    for(const [key , value] of map){
        if(value > 0) return key
    }
}