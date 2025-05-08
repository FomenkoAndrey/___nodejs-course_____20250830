import { Socket } from 'node:net'

const client = new Socket()

client.connect(3000, () => {
  console.log('Connected to the server!')
  client.write('Message from client.')
})

client.on('data', (data) => {
  console.log(`Received from server: ${data}`)
})

client.on('close', () => {
  console.log('Connection closed!')
})
