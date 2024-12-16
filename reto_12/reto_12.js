/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const values = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }
    return ornaments.split('').reduce((acc, item, index, arr) => {
        const currentValue = values[item]
        const previousValue = values[arr[index - 1]]
        index > 0 && previousValue < currentValue ? acc -= previousValue * 2 : false
        return acc + currentValue
    }, 0) || undefined
}

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
