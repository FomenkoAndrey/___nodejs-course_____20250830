import dgram from 'node:dgram'
import { HOST, MESSAGE, PORT } from './constants.mjs'

const client = dgram.createSocket('udp4')

client.send(MESSAGE, 0, 8, PORT, HOST, (error) => {
  if (error) throw error

  console.log('UDP message sent')

  client.send(MESSAGE, 8, 6, PORT, HOST, (error) => {
    if (error) throw error

    console.log('UDP message sent')

    client.send(MESSAGE, 14, 1, PORT, HOST, (error) => {
      if (error) throw error

      console.log('UDP message sent')
      client.close()
    })
  })
})
