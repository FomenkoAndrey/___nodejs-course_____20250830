import fs from 'fs'

console.log('start')

fs.readFile('./input.txt', (err, file) => {
  if (err) throw err

  console.log('Buffer:', file)

  console.log('toString:', file.toString())
})

console.log('end')
