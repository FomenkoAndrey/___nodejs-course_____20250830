import { pipeline } from 'node:stream/promises'
import fs from 'node:fs'

async function main() {
  const source = fs.createReadStream('source.txt')
  const destination = fs.createWriteStream('output.txt')

  try {
    await pipeline(source, destination)
    console.log('Pipeline succeeded.')
  } catch (err) {
    console.error('Something went wrong:', err)
  }
}

main().catch()
