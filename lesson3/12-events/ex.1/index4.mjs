import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

const timeoutListener = (seconds, unit = '') => {
  console.log(`Timeout Event occurred in ${seconds} ${unit}`)
}

timeoutEventEmitter.on('timeout', timeoutListener)

timeoutEventEmitter.once('singleEvent', () => {
  console.log('Single Event occurred')
})

setTimeout(() => timeoutEventEmitter.emit('timeout', 1, 's'), 1000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 2, 'sec'), 2000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 3, 'seconds'), 3000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 4, 'seconds'), 4000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 5, 'seconds'), 5000)

setTimeout(() => timeoutEventEmitter.emit('singleEvent'), 500)
setTimeout(() => timeoutEventEmitter.emit('singleEvent'), 1500)
setTimeout(() => timeoutEventEmitter.emit('singleEvent'), 2500)

setTimeout(() => timeoutEventEmitter.off('timeout', timeoutListener), 2500)
