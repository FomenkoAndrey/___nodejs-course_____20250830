import fs from 'node:fs'
import path from 'node:path'

if (!process.argv[2] || !process.argv[3]) {
  console.log('The file name and message must be specified as arguments')
  process.exit(0)
}

const folder = './output'
const fileName = process.argv[2]
const message = process.argv[3]

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder)
}

const writeStream = fs.createWriteStream(path.join(folder, fileName))

writeStream.write(`${message}\n`)

writeStream.end()

// node index3.mjs dump "hello world"
