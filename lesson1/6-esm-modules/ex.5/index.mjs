if (Math.random() > 0.5) {
  import('./source.mjs').then((module) => {
    console.log('Модуль успішно імпортовано:', module)
  })
} else {
  console.log('Число менше або дорівнює 0.5, тому модуль не імпортовано.')
}
