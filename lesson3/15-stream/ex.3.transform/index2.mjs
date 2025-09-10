import { Transform } from 'node:stream'

const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const arrayOfChars = chunk.toString().split('')
    const lastChar = arrayOfChars.pop() // \n
    const reversed = arrayOfChars.reverse().concat(lastChar).join('')

    callback(null, reversed)
  }
})

process.stdin.pipe(reverseStream).pipe(process.stdout)
