import { createServer } from 'node:net'
import debug from 'debug'

const server = createServer()

const debugData = debug('server:data')
const debugListening = debug('server:listening')
const debugConnect = debug('server:connection:connect')
const debugDisconnect = debug('server:connection:disconnect')

const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout))

server.on('connection', (socket) => {
  debugConnect('New client connected!')

  socket.setEncoding('utf-8')

  socket.on('data', async (msg) => {
    debugData(msg)
    await delay(1000)
    socket.write(msg)
  })

  socket.on('end', () => {
    debugDisconnect('Client is disconnected!')
  })
})

server.on('listening', () => {
  const { port } = server.address()
  debugListening(`TCP Server started on port ${port}!`)
})

server.listen(3000)
