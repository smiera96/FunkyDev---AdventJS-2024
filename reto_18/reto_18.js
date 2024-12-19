/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{address: string, name: string}|null}
 */
function findInAgenda(agenda, phone) {
    const lines = agenda.split('\n')
    const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/

    const candidates = lines
        .map(line => line.trim())
        .filter(line => {
            const match = line.match(phoneRegex)
            return match && match[0].includes(phone)
        })

    if (candidates.length !== 1) return null

    const line = candidates[0]
    const fullPhone = line.match(phoneRegex)[0]

    const nameMatch = line.match(/<(.*?)>/)
    const childName = nameMatch[1].trim()

    let address = line
        .replace(fullPhone, '')
        .replace(nameMatch[0], '')
        .trim()

    return { name: childName, address: address }
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(
    agenda,
"600-987"
))