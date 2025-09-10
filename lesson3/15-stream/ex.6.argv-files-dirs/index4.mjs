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

console.log('start:', performance.now().toFixed(2))

for (let i = 0; i < 1000000; i++) {
  writeStream.write(`${message}\n`)
}

writeStream.end()

console.log('end:', +performance.now().toFixed(2))

setTimeout(() => {
  console.log('This message may be delayed due to the file writing operation.')
}, 0)

// node index4.mjs dump "hello world"
