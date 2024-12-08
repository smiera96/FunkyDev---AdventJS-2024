/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    const fixPackages = []
    for (const char of packages) {
        if (char !== ')') {
            fixPackages.push(char)
            continue
        }

        let reverseWord = ''
        while (fixPackages[fixPackages.length - 1] !== '(') {
            reverseWord += fixPackages.pop()
        }

        fixPackages.pop()

        for (const c of reverseWord) {
            fixPackages.push(c)
        }
    }

    return fixPackages.join('')
}

console.log(fixPackages('a(cb)de'))

// a(bc(def)g)h
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// a(bc(def)g)h
// a bc def)g)h => split excepto -1
// parte 1 -> a bc
// def g h
// fed + 1 + p1 -1 => reverse -> bcfedg -> gdefcbh

// a(bc(def g h

// bc def g

