const path = require('node:path')

const relativePath = 'docs/file.txt'
const absolutePath = path.resolve(relativePath)

console.log(absolutePath)
