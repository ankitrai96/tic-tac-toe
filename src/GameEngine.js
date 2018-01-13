export const MinimaxAlgo = (boardState, player) => {
    const availSpots = VacantCell(boardState)
    const moves = []
    let bestMove
    if (GameOver(boardState, 'O')) {
        return {score: -10}
    } else if (GameOver(boardState, 'X')) {
        return {score: 10}
    } else if (availSpots.length === 0) {
        return {score: 0, index: -1}
    }
    for (const i = 0; i < availSpots.length; i++) {
        const move = {}
        move.index = boardState[availSpots[i]]
        boardState[availSpots[i]] = player
        move.score = (player=='X') ? MinimaxAlgo(boardState,'O').score : MinimaxAlgo(boardState,'X').score 
        boardState[availSpots[i]] = move.index
        moves.push(move)
    }
    if(player == 'X') {
        let bestScore = -10000
        for(let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score
                bestMove = i
            }
        }
    } else {
            let bestScore = 10000
            for(let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score
                    bestMove = i
                }
            }
        }
    return moves[bestMove]
}
export const GameOver = (evalBoard, forToken) => {
    if (
        (evalBoard[0] == forToken  && evalBoard[1] == forToken  && evalBoard[2] == forToken ) ||
        (evalBoard[3] == forToken  && evalBoard[4] == forToken  && evalBoard[5] == forToken ) ||
        (evalBoard[6] == forToken  && evalBoard[7] == forToken  && evalBoard[8] == forToken ) ||
        (evalBoard[0] == forToken  && evalBoard[3] == forToken  && evalBoard[6] == forToken ) ||
        (evalBoard[1] == forToken  && evalBoard[4] == forToken  && evalBoard[7] == forToken ) ||
        (evalBoard[2] == forToken  && evalBoard[5] == forToken  && evalBoard[8] == forToken ) ||
        (evalBoard[0] == forToken  && evalBoard[4] == forToken  && evalBoard[8] == forToken ) ||
        (evalBoard[2] == forToken  && evalBoard[4] == forToken  && evalBoard[6] == forToken )
        ) return true
        else return false
}
const VacantCell = (b) => {
    let l = []
    for(let c =0 ; c < b.length ; c++){
        if(!isNaN(b[c])) l.push(c)
    }
    return l
}