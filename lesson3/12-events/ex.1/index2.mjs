import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

timeoutEventEmitter.on('timeout', (seconds, unit = '') => {
  console.log(`Timeout Event occurred in ${seconds} ${unit}`)
})

setTimeout(() => timeoutEventEmitter.emit('timeout', 1, 's'), 1000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 2, 'sec'), 2000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 3, 'seconds'), 3000)
