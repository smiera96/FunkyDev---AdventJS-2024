/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    const fixList = {
        missing: {},
        extra: {}
    }

    received.forEach(item => {
        const receivedItemQuantity = received.filter(x => x === item).length
        const expectedItemQuantity = expected.filter(x => x === item).length
        const diff = receivedItemQuantity - expectedItemQuantity

        if (diff > 0) fixList.extra[item] = diff
    })

    expected.forEach(item => {
        const receivedItemQuantity = received.filter(x => x === item).length
        const expectedItemQuantity = expected.filter(x => x === item).length
        const diff = receivedItemQuantity - expectedItemQuantity

        if (diff < 0) fixList.missing[item] = Math.abs(diff)
    })

    return fixList
}

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
))
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
))
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }