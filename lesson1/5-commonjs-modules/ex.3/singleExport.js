function greet(name) {
  console.log('Hello ', name)
}

// ! Правильний варіант експорту для об'єкта
// module.exports = greet

// ! Неправильний варіант експорту для об'єкта
// ! При спробі працювати з таким експортом в index-файлі, буде TypeError: greet is not a function
exports = greet
