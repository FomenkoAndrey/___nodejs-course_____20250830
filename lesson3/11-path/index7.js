const path = require('node:path')

const pathParts = {
  root: '/',
  dir: '/home/user/docs',
  base: 'file.txt'
}

const filePath = path.format(pathParts)

console.log(filePath)

const filePosixPath = path.posix.format(pathParts)

console.log(filePosixPath)
