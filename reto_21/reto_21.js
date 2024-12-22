/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
    if (tree === null) return 0

    const leftHeight = treeHeight(tree.left)
    const rightHeight = treeHeight(tree.right)

    return 1 + Math.max(leftHeight, rightHeight)
}

// Definición del árbol
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree))
// Devuelve: 3