import { Duplex } from 'node:stream'

const inputStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  },

  read(size) {
    if (this.currentCharCode > 90) { // Z is 90
      this.push(null)
      return
    }
    this.push(String.fromCharCode(this.currentCharCode++))
  }
})

inputStream.currentCharCode = 65 // 65 is A

inputStream.pipe(process.stdout)
