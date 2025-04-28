import { EventEmitter } from 'node:events'
import { appendFile, rename, writeFile } from 'node:fs/promises'

const fileEmitter = new EventEmitter()

const fileName = 'output.txt'
const renamedFileName = 'renamed-output.txt'

fileEmitter.on('writeComplete', async () => {
  console.log(`Файл "${fileName}" було записано`)
  await appendFile(fileName, '\nOne more line of text')
  fileEmitter.emit('appendComplete')
})

fileEmitter.on('appendComplete', async () => {
  console.log(`У файл "${fileName}" було додано дані`)
  await rename(fileName, renamedFileName)
  fileEmitter.emit('renameComplete')
})

fileEmitter.on('renameComplete', () => {
  console.log(`Файл було перейменовано на ${renamedFileName}`)
})

writeFile(fileName, 'Output file text').then(() => {
  fileEmitter.emit('writeComplete')
})
