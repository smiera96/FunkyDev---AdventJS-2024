/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    let organizeInventory = {}

    inventory.forEach((item) => {
        organizeInventory[item.category] ??= {}

        if (organizeInventory[item.category][item.name]) {
            organizeInventory[item.category][item.name] += item.quantity
        } else {
            organizeInventory[item.category][item.name] = item.quantity
        }
    })

    return organizeInventory
}

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

console.table(organizeInventory(inventory2))