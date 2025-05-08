// ! Варіант без обробки помилок
import fs from 'fs'

console.log('start')

const file = fs.readFileSync('./input.txt')

console.log('Buffer:', file)

console.log('toString:', file.toString())

console.log('end')

// ! Варіант з обробкою помилок
// import fs from 'fs'
//
// try {
//   const file = fs.readFileSync('./input.txt')
//   console.log('toString:', file.toString())
// } catch (err) {
//   console.log(err.message)
// }
