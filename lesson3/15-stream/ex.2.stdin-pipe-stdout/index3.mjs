import fs from 'node:fs'

const filePath = './dump.txt'
const writeStream = fs.createWriteStream(filePath)

process.stdin.pipe(writeStream)
