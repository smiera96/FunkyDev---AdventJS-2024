/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    let map = grid.map(row => row.map(() => 0))
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1]
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1]
    const increment = (x, y) =>
        x >= 0 && x < map.length && y >= 0 && y < map[0].length ? map[x][y]++ : false

    for (const [i, row] of grid.entries())
        for (const [j, col] of row.entries())
            if (grid[i][j] === true)
                dx.forEach((item, index) => increment(i + (item), j + (dy[index])))

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