function solution(board, moves, store = []) {
    const result = [];
    while(moves.length > 0){
        const targetIdx = moves.shift() - 1;
        for(let i = 0; i < board.length; i++){
            if(board[i][targetIdx] > 0){
                if(store.at(-1) === board[i][targetIdx]) {
                    result.push(store.pop() , board[i][targetIdx]);
                }
                else store.push(board[i][targetIdx]);
                board[i][targetIdx] = 0;
                break;
            }
        }
    }
    return result.length
}

/*
 4, 3, 1, 1, 3, 2, 4
 4, 3, 3, 2, 4
 4, 2, 4
  
*/