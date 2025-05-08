// 0, 1, 1, 2, 3, 5, 8, 13 ,21, 34, 55, 89, 144

setTimeout(() => console.log('Timeout', 0))

function fib(n) {
  return new Promise((resolve) => {
    if (n === 0 || n === 1) {
      return resolve(n)
    }
    Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) => resolve(fib1 + fib2))
  })
}

fib(40).then((res) => console.log(res))
