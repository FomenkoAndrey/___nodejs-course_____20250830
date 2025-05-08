console.log('start')

setImmediate(() => {
  console.log('setImmediate')
})

process.nextTick(() => {
  console.log('nextTick')
})

console.log('end')
