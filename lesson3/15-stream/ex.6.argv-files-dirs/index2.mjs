if (!process.argv[2] || !process.argv[3]) {
  console.log('The file name and message must be specified as arguments')
  process.exit(0)
}

console.log('argv[2]:', process.argv[2])
console.log('argv[3]:', process.argv[3])

console.log('Continue...')

// node index2.mjs dump "hello world"
