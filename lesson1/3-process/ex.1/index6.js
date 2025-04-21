// console.log(process.release)
// console.log(process.release.lts)

// ! 1
// if (process.release.lts !== 'Jod') {
//   throw new Error('Wrong node.js version')
// }
//
// console.log('Node version OK!', process.release.lts)

// ! 2if (!process.release.lts) {
//   throw new Error('Wrong node.js version')
// }


console.log('Node version OK!', process.release.lts)
