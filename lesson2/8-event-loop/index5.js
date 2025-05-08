let bar

function someAsyncApiCall(callback) {
  callback()

  process.nextTick(callback)
}

someAsyncApiCall(() => {
  console.log('bar', bar)
})

bar = 1
