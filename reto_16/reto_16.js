/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    return s.split('').reduce((acc, item) => {
        acc.at(-1) === item ? acc.pop() : acc.push(item)
        return acc
    }, []).join('')
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos