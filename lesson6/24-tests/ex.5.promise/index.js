function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 25,
        sex: 'male'
      })
    }, 4000)
  })
}

module.exports = getData
