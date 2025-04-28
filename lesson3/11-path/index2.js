const path = require('node:path')

const baseDir = '/home/user'
const fileName = 'docs/file.txt'

const fullPath = path.join(baseDir, fileName)

console.log(fullPath)

const fullCurrentPath = path.join(__dirname, fileName)

console.log(fullCurrentPath)
