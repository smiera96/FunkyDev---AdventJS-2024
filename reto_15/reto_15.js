/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
    const dKeys = Object.keys(data[0])
    const maxL = dKeys.map(item => item.length)

    data.forEach(obj => {
        Object.values(obj).forEach((value, index) => {
            maxL[index] = Math.max(maxL[index], String(value).length)
        })
    })

    const hr = '+' + maxL.map(item => '-'.repeat(item + 2)).join('+') + '+'
    const header =
        '|' + dKeys.map((item, index) => ' ' +
        (item.charAt(0).toUpperCase() + item.slice(1)).padEnd(maxL[index] + 1, ' ')).join('|') + '|'

    const values = data.map(obj => {
        const values = Object.values(obj)
        return '|' + values.map((value, index) => ' ' + String(value)
            .padEnd(maxL[index] + 1, ' ')).join('|') + '|'
    })

    return [hr, header, hr].concat(values, [hr]).join('\n')
}

console.log(
    drawTable([
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
        { name: 'Charlie', city: 'New York' }
    ])
)
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
    drawTable([
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 }
    ])
)
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+