import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

timeoutEventEmitter.on('timeout', () => {
  console.log('Timeout Event occurred!')
})

setTimeout(() => timeoutEventEmitter.emit('timeout'), 3000)
