/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const moves = {U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1]}
    const chars = {'@':'crash', 'o':'crash', '*':'eat', '·':'none'}

    let tRow, tCol
    for (let i = 0; i < board.length; i++) {
        let trainIndex = board[i].indexOf('@')
        if (trainIndex > -1) {
            tRow = i
            tCol = trainIndex
            break
        }
    }

    const nextRow = tRow + moves[mov][0]
    const nextCol = tCol + moves[mov][1]
    return chars[board[nextRow]?.[nextCol]] || 'crash'
}

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha