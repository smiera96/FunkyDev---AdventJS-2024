/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const dir = [
        [-1, -1], [-1, 0], [-1, 1], [0, -1],
        [0, 1], [1, -1], [1, 0], [1, 1]
    ]
    const map = Array.from({ length: rows }, () => Array(cols).fill(0))

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col]) {
                for (const [dx, dy] of dir) {
                    const newR = row + dx
                    const newC = col + dy
                    if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
                        map[newR][newC]++
                    }
                }
            }
        }
    }

    return map
}


console.log(
    detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false]
    ])
)
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
    detectBombs([
        [true, false],
        [false, false]
    ])
)
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
    detectBombs([
        [true, true],
        [false, false],
        [true, true]
    ])
)
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]