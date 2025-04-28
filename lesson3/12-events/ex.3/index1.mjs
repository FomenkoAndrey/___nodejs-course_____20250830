import { EventEmitter } from 'events'

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()

myEmitter.on('error', (err) => {
  console.error('Помилка виникла:', err)
})

myEmitter.emit('error', new Error('Це помилка!'))

console.log('Цей код продовжує виконуватись після обробки помилки.')
