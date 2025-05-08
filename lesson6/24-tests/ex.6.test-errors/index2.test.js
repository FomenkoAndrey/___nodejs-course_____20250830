const getData = require('./index.js')

describe('Test throw error:', () => {
  test('Test async getData', () => {
    expect(getData).toThrow('Test some error')
  })
})
