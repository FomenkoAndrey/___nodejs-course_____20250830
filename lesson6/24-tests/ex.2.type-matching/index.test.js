const { getType } = require('./index.js')

test('getType correctly identifies data types', () => {
  expect(getType(123)).toBe('number')
  expect(getType('test')).toBe('string')
  expect(getType(true)).toBe('boolean')
  expect(getType({})).toBe('object')
  expect(getType([])).toBe('object')
  expect(getType(null)).toBe('object')
  expect(getType(undefined)).toBe('undefined')
})
