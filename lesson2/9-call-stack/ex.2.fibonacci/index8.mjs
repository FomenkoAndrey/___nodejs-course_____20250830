setTimeout(() => console.log('Timeout', 0))

let memo = [0, 1]

function fib(n) {
  return new Promise((resolve) => {
    function fibHelper(i) {
      if (i <= n) {
        if (!memo[i]) {
          memo[i] = memo[i - 1] + memo[i - 2]
        }
        setImmediate(() => fibHelper(i + 1))
      } else {
        resolve(memo[n])
      }
    }

    fibHelper(2)
  })
}

console.time('fib')
fib(10).then((res) => console.log(res))
fib(40).then((res) => console.log(res))
fib(100).then((res) => console.log(res))
fib(1000).then((res) => console.log(res))
fib(10000).then((res) => console.log(res))
fib(100000).then((res) => console.log(res))
fib(1000000).then((res) => {
  console.log(res)
  console.timeEnd('fib')
})
