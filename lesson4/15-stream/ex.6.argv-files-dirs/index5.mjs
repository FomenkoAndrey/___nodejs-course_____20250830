import fs from 'node:fs'
import path from 'node:path'

const folder = './output'
const fileName = 'dump'
const resultFileName = 'dump-copy'

const readStream = fs.createReadStream(path.join(folder, fileName))
const writeStream = fs.createWriteStream(path.join(folder, resultFileName))

readStream.pipe(writeStream)

readStream.on('end', () => console.log('Read stream ended'))

writeStream.on('finish', () => console.log('File was copied successfully'))

writeStream.on('close', () => console.log('Write stream ended'))
