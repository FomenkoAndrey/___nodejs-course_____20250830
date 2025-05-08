console.log('start')

process.nextTick(() => {
  console.log('nextTick')
})

console.log('end')
