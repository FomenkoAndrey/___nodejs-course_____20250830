const getData = require('./index.js')

const user = { name: 'John', age: 25, sex: 'male' }

describe('Test promise function:', () => {
  test('test async getData', async () => {
    jest.useFakeTimers()

    const promise = getData()

    jest.runAllTimers()

    const data = await promise

    expect(data).toEqual(user)

    jest.useRealTimers()
  })
})
