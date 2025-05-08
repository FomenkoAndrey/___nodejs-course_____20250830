const fs = jest.genMockFromModule('fs')

fs.promises = {
  readFile: jest.fn().mockResolvedValue('success'),
  access: jest.fn().mockResolvedValue(undefined)
}

module.exports = fs
