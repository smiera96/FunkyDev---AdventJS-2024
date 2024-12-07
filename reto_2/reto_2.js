function createFrame(names) {
    const maxL = names.reduce((max, text) => Math.max(max, text.length), 0)
    const border = '*'.repeat(maxL + 4)
    const framedNames = names
        .map(name => `* ${name.padEnd(maxL, ' ')} *`)
        .join('\n')
    return `${border}\n${framedNames}\n${border}`
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))