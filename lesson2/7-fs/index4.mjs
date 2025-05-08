import fs from 'node:fs'

fs.readFile('./input.txt', (err, file) => {
  if (err) throw err

  fs.writeFile('./output.txt', file, (err) => {
    if (err) throw err

    fs.appendFile('./output.txt', '\nЦей рядок було додано після запису.', (err) => {
      if (err) throw err
    })
  })
})
