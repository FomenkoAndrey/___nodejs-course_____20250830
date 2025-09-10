const path = require('node:path')
const fs = require('node:fs')

const filePath = path.join('file.txt')
// const filePath = path.join('/home/user/docs', 'file.txt')

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(`Файл ${filePath} не існує`)
  } else {
    console.log(`Файл ${filePath} існує`)
  }
})

// F_OK
// R_OK
// W_OK
// X_OK
