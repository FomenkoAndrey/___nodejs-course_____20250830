import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

timeoutEventEmitter.on('timeout', (seconds, unit = '') => {
  console.log(`Timeout Event occurred in ${seconds} ${unit}`)
})

console.log('getMaxListeners:', timeoutEventEmitter.getMaxListeners())

timeoutEventEmitter.setMaxListeners(100)

console.log('getMaxListeners:', timeoutEventEmitter.getMaxListeners())
