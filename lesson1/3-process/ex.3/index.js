process.on('exit', (code) => {
  if (code !== 0) {
    console.log(`Exit code: ${code}`)
    console.log('Something went wrong')
  }
})

console.log(a)
