// if (process.versions.node !== '20.17.0') {
//   throw new Error('Wrong node.js version')
// }
//
// console.log('Node version OK!')

const majorNodeVersion = +process.versions.node.slice(0, 2)
console.log(majorNodeVersion)
console.log(typeof majorNodeVersion)

if (majorNodeVersion < 20) {
  throw new Error('Wrong node.js version')
}

console.log('Node version OK!')
