import dgram from 'node:dgram'
import { HOST, PORT } from './constants.mjs'

const client = dgram.createSocket('udp4')

const messages = [
  'Welcome aboard!\n',
  'We are thrilled you have joined our crew.\n',
  'Your experience and skills will greatly strengthen our team.\n',
  'We eagerly anticipate being able to collaborate on projects.\n'
]

client.send(messages, PORT, HOST, (error) => {
  if (error) throw error

  console.log('UDP message sent')
  client.close()
})
