/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = []

    function backtrack(startIndex, currentSet) {
        for (let i = startIndex; i < gifts.length; i++) {
            currentSet.push(gifts[i])
            result.push([...currentSet])
            backtrack(i + 1, currentSet)
            currentSet.pop()
        }
    }

    backtrack(0, [])
    result.sort((a, b) => a.length - b.length)

    return result
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]
