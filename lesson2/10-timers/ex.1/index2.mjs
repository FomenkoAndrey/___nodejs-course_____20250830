const recursiveTimeout = () => {
  console.log('Цей код виконається кожні 5 секунд')
  setTimeout(recursiveTimeout, 5000)
}

recursiveTimeout()
