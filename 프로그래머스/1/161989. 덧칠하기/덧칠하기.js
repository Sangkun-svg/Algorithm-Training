function solution(n, m, sections) {
    let paintCount = 0;
    let paintedWalls = 0;
    for(let i = 0; i < sections.length; i++){
        if(paintedWalls < sections[i]){
            paintCount++;
            paintedWalls = sections[i] + m - 1;
        }
    }
    return paintCount;
}