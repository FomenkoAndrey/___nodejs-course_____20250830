const first = () => {
  console.log('Hello from first')
  second()
}

const second = () => {
  console.log('Hello from second')
  third()
}

const third = () => {
  console.log('Hello from third')
}

first()
