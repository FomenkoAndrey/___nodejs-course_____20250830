import { appendFile, readFile, writeFile } from 'node:fs/promises'

async function copyAndAppend() {
  try {
    const file = await readFile('./input.txt')
    await writeFile('./output.txt', file)
    await appendFile('./output.txt', '\nЦей рядок було додано після запису copyAndAppend.')
  } catch (err) {
    throw err
  }
}

copyAndAppend().catch(console.log)
