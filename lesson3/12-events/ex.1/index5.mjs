import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

timeoutEventEmitter.on('timeout', (seconds, unit = '') => {
  console.log(`FIRST Timeout Event occurred in ${seconds} ${unit}`)
})

timeoutEventEmitter.on('timeout', () => {
  console.log('SECOND Timeout Event occurred')
})

timeoutEventEmitter.on('timeout', () => {
  console.log('THIRD Timeout Event occurred')
})

setTimeout(() => timeoutEventEmitter.emit('timeout', 1, 'seconds'), 1000)
