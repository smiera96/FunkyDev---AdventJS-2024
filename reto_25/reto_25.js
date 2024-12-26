/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let current = 0

    const codeArray = code.split('')
    for (let cursor = 0; cursor < code.length; cursor++) {
        let instruction = codeArray[cursor]

        if (instruction === '+') {
            current++
        }

        if (instruction === '-') {
            current--
        }

        if (instruction === '[') {
            const closureIndex = code.indexOf(']', cursor)
            current = 0
            cursor = closureIndex - 1
        }

        if (instruction === '{' && current === 0) {
            const closureIndex = code.indexOf('}', cursor)
            cursor = closureIndex - 1
        }
    }

    return current
}

console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5