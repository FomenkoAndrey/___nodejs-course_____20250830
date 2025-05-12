import { pipeline } from 'node:stream/promises'

import { createReadStream, createWriteStream } from 'node:fs'
import { createGzip } from 'node:zlib'

const readStream = createReadStream('source.txt')
const gzipStream = createGzip()
const writeStream = createWriteStream('output.txt.gz')

try {
  await pipeline(readStream, gzipStream, writeStream)
  console.log('Successfully completed!')
} catch (err) {
  console.error('Error in pipeline:', err)
}
