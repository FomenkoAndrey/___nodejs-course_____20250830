const getData = require('./index.js')

describe('Test throw error:', () => {
  test('Test async getData', () => {
    try {
      getData()
      throw new Error('Test some error')
    } catch ({ message }) {
      expect(message).toBe('Test some error')
    }
  })
})
