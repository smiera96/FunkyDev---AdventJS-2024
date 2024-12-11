/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const car = 'r'
    const lane = `${'~'.repeat(length)}`
    const race = []

    indices.forEach((carPosition, i) => {
        const ws = indices.length - 1 - i
        let row = ' '.repeat(ws)

        if (carPosition === 0) {
            row += lane
        } else if (carPosition > 1) {
            row += `${lane.slice(0, carPosition)}${car}${lane.slice(carPosition + 1)}`
        } else {
            row += `${lane.slice(0, carPosition)}r`.padEnd(length, '~')
        }

        race.push(`${row} /${i + 1}`)
    })

    return race.join('\n')
}

console.log(drawRace([0, 5, -3], 10))