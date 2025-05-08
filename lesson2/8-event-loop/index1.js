console.log('start')

setTimeout(() => console.log('Timeout in 2s.'), 2000)

let counter = 0

const intervalId = setInterval(() => {
  console.log(`Interval 1s. Counter: ${counter}`)
  counter++

  if (counter === 5) {
    clearInterval(intervalId)
    console.log('Interval stopped after 5 iterations.')
  }
}, 1000)

console.log('end')
