/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
    let groupShoes = []

    shoes.forEach(item => {
        groupShoes[item.size] ??= {I: 0, R: 0}
        groupShoes[item.size][item.type]++
    })

    return groupShoes.flatMap((item, size) => {
        const min = Math.min(item.R, item.I)
        return Array(min).fill(size)
    })
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
console.log(organizeShoes(shoes))