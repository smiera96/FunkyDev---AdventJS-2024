/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    if (height < 1) return ''

    const b = '#'
    const s = '_'

    const max = 1 + (height - 1) * 2
    let maxSide = Math.floor(max / 2)
    const treeBase = `${s.repeat(maxSide)}${b}${s.repeat(maxSide)}`

    let step = 1 // first ornament
    let tree = ''

    for (let i = 1; i <= height; i++) {
        const spaces = s.repeat(maxSide)
        const ornaments  = ornament.repeat(step)

        tree += `${spaces}${ornaments}${spaces}\n`
        maxSide--
        step += 2
    }

    return `${tree}${treeBase}\n${treeBase}`
}

console.log(createXmasTree(5, '*'))