const draw = (length, message) => {
  console.log('-'.repeat(length))
  console.log(message)
  console.log('-'.repeat(length))
}

if (require.main === module) {
  draw(process.argv[2], process.argv[3])
} else {
  module.exports = draw
}
