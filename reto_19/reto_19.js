/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    const poolPrices = [10, 5, 2, 1]
    const distribution = []
    for (const price of poolPrices) {
        while (weight >= price) {
            distribution.push(price)
            weight -= price
        }
    }

    return distribution.sort((a, b) => a - b).reduce((acc, item, index, array) => {
        if (acc.length) {
            const charDiff = boxRepresentations[item][0].length - acc[acc.length - 1].length
            if (charDiff > 0) acc[acc.length - 1] = acc[acc.length - 1] + '_'.repeat(charDiff - 1)
            return [...acc, ...boxRepresentations[item].slice(1)]
        }
        return [...acc, ...boxRepresentations[item]]
    }, []).join('\n')
}

console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|