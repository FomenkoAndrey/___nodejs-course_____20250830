console.log('start')

setTimeout(() => console.log('Timeout'), 0)

Promise.resolve().then(() => console.log('Promise'))

process.nextTick(() => console.log('nextTick'))

console.log('end')
