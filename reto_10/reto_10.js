/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    let memory = {}
    let cursor = 0

    const operations = {
        MOV: (x, y) => memory[y] = isNaN(x) ? memory[x] : Number(x),
        INC: (x) => memory[x]++,
        DEC: (x) => memory[x]--,
        JMP: (x, y) => memory[x] === 0 ? cursor = y - 1 : false
    }
    const initialize = (x) => typeof x === 'string' && !memory[x] ? memory[x] = 0 : false

    while (cursor < instructions.length) {
        const [instruction, arg1, arg2] = instructions[cursor].split(' ')
        initialize(arg1)
        operations[instruction]?.(arg1, arg2)
        cursor++
    }

    return memory['A'] || undefined
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */