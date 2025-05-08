const fsp = require('fs').promises

const getData = async () => {
  try {
    await fsp.access('test.js')
    return await fsp.readFile('test.js')
  } catch (error) {
    throw error
  }
}

module.exports = getData
