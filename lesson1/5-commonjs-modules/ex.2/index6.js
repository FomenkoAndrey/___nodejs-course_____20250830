try {
  require.resolve('new-module')
  require('new-module')
} catch (err) {
  console.log('Please install new-module')
}
