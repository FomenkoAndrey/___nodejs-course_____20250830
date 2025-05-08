const { getFormattedDate } = require('./index.js')

test('getFormattedDate always returns the same date', () => {
  const OriginalDate = global.Date

  global.Date = class extends Date {
    constructor() {
      super()
    }

    getDate() {
      return 17
    }

    getMonth() {
      return 11
    }

    getFullYear() {
      return 2023
    }
  }

  // Завжди повертає '17-12-2023'
  expect(getFormattedDate()).toBe('17-12-2023')

  global.Date = OriginalDate
})
