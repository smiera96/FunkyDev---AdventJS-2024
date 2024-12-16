/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    const reindeerSort = reindeer.sort()
    const stablesSort = stables.sort()

    return reindeerSort.reduce((acc, current, index) => {
        return acc + Math.abs(current - stablesSort[index])
    }, 0)
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3

console.log(minMovesToStables([1, 1, 3], [1, 8, 4]))