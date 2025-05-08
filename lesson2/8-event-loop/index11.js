const fs = require('fs')

const time = () => `${performance.now().toFixed(2)} ms:`

console.log(time(), 'start')

setTimeout(() => console.log(time(), 'Timeout1'), 0)
setTimeout(() => console.log(time(), 'Timeout2'), 20)

setImmediate(() => console.log(time(), 'Immediate'))

Promise.resolve().then(() => console.log(time(), 'Promise'))

process.nextTick(() => console.log(time(), 'nextTick'))

fs.writeFile('./temp.txt', 'Hello', () => console.log(time(), 'writeFile'))

console.log(time(), 'end')
