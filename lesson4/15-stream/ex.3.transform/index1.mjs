import { Transform } from 'node:stream'

const upperCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    const upperCased = chunk.toString().toUpperCase()

    callback(null, upperCased)
  }
})

process.stdin.pipe(upperCaseStream).pipe(process.stdout)
