import fs from 'fs'

fs.readFile('./input.txt', (err, file) => {
  if (err) throw err

  fs.writeFile('./output.txt', file, (err) => {
    if (err) throw err
  })
})
