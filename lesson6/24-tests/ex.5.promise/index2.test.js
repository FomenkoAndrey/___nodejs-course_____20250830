const getData = require('./index.js')

const user = { name: 'John', age: 25, sex: 'male' }

describe('Test promise function:', () => {
  test('test async getData', async () => {
    await expect(getData()).resolves.toEqual(user)
  })
})
