const { delayedCallback } = require('./index.js')

test('delayedCallback calls the callback after a delay', () => {
  const callback = jest.fn()

  jest.useFakeTimers()

  delayedCallback(callback, 3000)

  // ! Failed
  // delayedCallback(() => {}, 3000)

  expect(callback).not.toHaveBeenCalled()

  jest.runAllTimers()

  expect(callback).toHaveBeenCalled()

  jest.useRealTimers()
})
