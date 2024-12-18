/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const xy = {R: 1, L: -1, U: 1, D: -1}
    const invertedDirections = { R: 'L', L: 'R', U: 'D', D: 'U' }
    const prevMoves = {R: false, L: false, U: false, D: false}
    const robot = [0, 0]
    let order = null

    for (const item of moves.split('')) {
        if (['*', '!', '?'].includes(item)) {
            order = item
            continue
        }

        let pos = item
        let extra = order === '*' ? 1 : 0

        if (order === '!') {
            pos = invertedDirections[item]
        } else if (order === '?' && prevMoves[item]) {
            order = null
            continue
        }

        robot[['R', 'L'].includes(pos) ? 0 : 1] += xy[pos] + extra
        prevMoves[pos] = true
        order = null
    }

    return robot[0] === 0 && robot[1] === 0 || robot
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
