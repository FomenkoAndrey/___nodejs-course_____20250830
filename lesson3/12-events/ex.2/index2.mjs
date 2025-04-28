import { EventEmitter } from 'node:events'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

class FileReader extends EventEmitter {
  async execute(func, ...args) {
    console.time('execute')
    this.emit('start')
    try {
      const data = await func(...args)
      this.emit('data', data)
      console.timeEnd('execute')
      this.emit('end')
    } catch (err) {
      this.emit('error', err)
    }
  }
}

const reader = new FileReader()

reader.on('start', () => console.log('----- start execution -----'))
reader.on('end', () => console.log('----- end execution -----'))
reader.on('data', (data) => {
  console.log(data.toString())
})
reader.on('error', (err) => {
  console.error('An error occurred:', err)
})

const filePath = fileURLToPath(import.meta.url)

reader.execute(readFile, filePath)
