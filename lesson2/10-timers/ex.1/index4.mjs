let num = 1

const recursiveTimeout = () => {
  const word =
      num % 100 >= 11 && num % 100 <= 14
          ? 'секунд'
          : num % 10 === 1
              ? 'секунда'
              : num % 10 >= 2 && num % 10 <= 4
                  ? 'секунди'
                  : 'секунд'

  console.log(`Цей код виконається кожні ${num} ${word}`)

  setTimeout(recursiveTimeout, num * 1000)

  num++
}

recursiveTimeout()
