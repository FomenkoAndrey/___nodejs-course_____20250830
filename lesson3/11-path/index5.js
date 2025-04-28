const path = require('node:path')

const basePath = '/home/user/docs'
const targetPath = '/home/user/docs/file.txt'

const relativePath = path.relative(basePath, targetPath)

console.log(relativePath)

const basePath2 = '/home/user/projects'
const targetPath2 = '/home/user/docs/file.txt'

const relativePath2 = path.relative(basePath2, targetPath2)

console.log(relativePath2)
