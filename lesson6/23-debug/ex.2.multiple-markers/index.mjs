import debug from 'debug'

const debugLog1 = debug('marker:1')
const debugLog2 = debug('marker:2')
const debugLog3 = debug('marker:3')

debugLog1('Message from marker 1')

debugLog2('Message from marker 2')

debugLog3('Message from marker 3')
