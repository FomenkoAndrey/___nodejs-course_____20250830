import dgram from 'node:dgram'
import { HOST, PORT } from './constants.mjs'

const server = dgram.createSocket('udp4')

server.on('listening', () => {
  console.log(`UDP server listening on port ${PORT}`)
})

server.on('message', (message, remoteInfo) => {
  console.log(`${remoteInfo.address}:${remoteInfo.port} - ${message}`)
})

server.bind(PORT, HOST)
