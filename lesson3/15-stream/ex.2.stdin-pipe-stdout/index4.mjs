process.stdin.on('data', (data) => {
  // \r\n - windows, \n - unix
  if (data.toString() === 'start\r\n') {
    console.log('Let\'s go!')
    return
  }

  if (data.toString() === 'end\r\n') {
    console.log('Finished!')
    process.exit()
  }

  console.log(`Data length: ${data.length - 2}`)
  console.log(`Data length with symbols \\r\\n: ${data.length - 2} + 2 = ${data.length}`)
})
