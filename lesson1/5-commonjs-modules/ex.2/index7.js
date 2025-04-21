try {
  require.resolve('special-module')
  require('special-module')
} catch (err) {
  console.log('Please install special-module')
}
