const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

setInterval(async () => {
  console.log('Цей код виконається кожні 5 секунд')
  await wait(4000)
  // ! Ми чекаємо цей setTimeout, він виконується після того як виконається основний код
  // ^ Але інтервал виконується кожні 5 секунд, і не чекає завершення додаткової логіки
  console.log('Додаткова логіка, триває 4 секунда')
}, 5000)

// const recursiveTimeout = async () => {
//   console.log('Цей код виконається кожні 5 секунд')
//   await wait(4000)
//   // ! Ми чекаємо цей setTimeout, він виконується після того як виконається основний код
//   // ^ Рекурсивний таймер очікує затримку додаткової логіки
//   console.log('Додаткова логіка, триває 4 секунда')
//   setTimeout(recursiveTimeout, 5000)
// }

// recursiveTimeout()
