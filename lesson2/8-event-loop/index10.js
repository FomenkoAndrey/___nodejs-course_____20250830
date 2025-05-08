const fs = require('fs')

console.log('start')

setTimeout(() => console.log('Timeout1'), 0)
setTimeout(() => console.log('Timeout2'), 20)

setImmediate(() => console.log('Immediate'))

Promise.resolve().then(() => console.log('Promise'))

process.nextTick(() => console.log('nextTick'))

fs.writeFile('./temp.txt', 'Hello', () => console.log('writeFile'))

console.log('end')
