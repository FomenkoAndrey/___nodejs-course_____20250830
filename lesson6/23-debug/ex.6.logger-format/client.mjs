import { Socket } from 'net'

let counter = 0

const client = new Socket()
client.connect(3000, () => {
  console.log('Connected!')
  client.write('Hello message #1')

  setTimeout(() => {
    client.write('Hello message #2 after a while')
  }, 200)
})

client.on('data', (data) => {
  counter++
  console.log('Received from server: ' + data)

  if (counter === 2) {
    client.destroy()
  }
})

client.on('close', () => {
  console.log('Connection closed!')
})
