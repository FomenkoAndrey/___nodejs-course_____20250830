const path = require('node:path')

const path1 = '/home/user/docs/file.txt'
const path2 = 'docs/file.txt'

console.log(path.isAbsolute(path1))
console.log(path.isAbsolute(path2))
