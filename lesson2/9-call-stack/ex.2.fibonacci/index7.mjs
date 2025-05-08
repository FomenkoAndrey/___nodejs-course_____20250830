// O(n)

setTimeout(() => console.log('Timeout', 0))

let memo = [0, 1]

function fib(n) {
  for (let i = 2; i <= n; i++) {
    if (!memo[i]) {
      memo[i] = memo[i - 1] + memo[i - 2]
    }
  }

  return memo[n]
}

console.time('fib')
console.log(fib(10))
console.log(fib(40))
console.log(fib(100))
console.log(fib(1000))
console.log(fib(10000))
console.log(fib(100000))
console.log(fib(1000000))
console.timeEnd('fib')
