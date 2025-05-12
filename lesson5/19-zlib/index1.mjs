import { createGzip } from 'node:zlib'
import { createReadStream, createWriteStream } from 'node:fs'

const gzip = createGzip()

const readStream = createReadStream('./data/index.html')
const writeStream = createWriteStream('./data/index.html.gz')

readStream.pipe(gzip).pipe(writeStream)
