import dgram from 'node:dgram'
import { HOST, MESSAGE, PORT } from './constants.mjs'

let index = 0

setInterval(() => {
  const client = dgram.createSocket('udp4')

  client.send(`${MESSAGE} ${index + 1}`, PORT, HOST, (error) => {
    if (error) throw error
    console.log(`UDP message ${++index} sent`)
    client.close()
  })
}, 1000)
