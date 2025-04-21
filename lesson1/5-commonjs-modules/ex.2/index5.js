try {
  require.resolve('test-module')
  console.log('test-module is installed')
  require('test-module')
} catch (err) {
  console.log('Please install test-module')
}

// try {
//   require.resolve('some-module')
//   console.log('some-module is installed')
//   require('some-module')
// } catch (err) {
//   console.log('Please install some-module')
// }
