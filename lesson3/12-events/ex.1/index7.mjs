import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

timeoutEventEmitter.on('timeout', (seconds, unit = '') => {
  console.log(`Timeout Event occurred in ${seconds} ${unit}`)
})

timeoutEventEmitter.on('timeoutSecond', (seconds, unit = '') => {
  console.log('timeoutSecond')
})

timeoutEventEmitter.on('timeoutThird', (seconds, unit = '') => {
  console.log('timeoutThird')
})

console.log('eventNames:', timeoutEventEmitter.eventNames())
