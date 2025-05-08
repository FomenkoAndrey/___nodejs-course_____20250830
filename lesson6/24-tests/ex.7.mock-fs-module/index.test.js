const getData = require('./index')

jest.mock('fs')

const expectedValue = 'success'

describe('Test promise function:', () => {
  test('test async getData', async () => {
    // expect(await getData()).toBe(expectedValue)
    await expect(getData()).resolves.toEqual(expectedValue)
  })
})

module.exports = getData
