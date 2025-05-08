import { appendFile, readFile, writeFile } from 'node:fs/promises'

readFile('./input.txt')
    .then((file) => writeFile('./output.txt', file))
    .then(() => appendFile('./output.txt', '\nЦей рядок було додано після запису appendFile.'))
    .catch((err) => {
      console.log(err)
    })
