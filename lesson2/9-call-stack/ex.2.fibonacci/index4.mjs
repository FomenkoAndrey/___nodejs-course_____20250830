setTimeout(() => console.log('Timeout', 0))

function fib(n) {
  return new Promise((resolve) => {
    if (n === 0 || n === 1) {
      return resolve(n)
    }
    setImmediate(() => {
      Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) => resolve(fib1 + fib2))
    })
  })
}

console.time('fib')
fib(10).then((res) => console.log(res))
fib(30).then((res) => {
  console.log(res)
  console.timeEnd('fib')
})
fib(40).then((res) => console.log(res))
