import { createServer } from 'node:net'

const server = createServer()

server.on('connection', (socket) => {
  console.log('New client connected!')

  socket.setEncoding('utf-8')

  socket.write('Welcome aboard!\n')

  socket.on('data', (msg) => {
    console.log(msg)
    socket.write(`Received from server: ${msg}`)
  })

  socket.on('close', () => {
    console.log('Client connection closed!')
  })
})

server.listen(3000, () => {
  console.log('TCP Server started!')
})

setTimeout(() => {
  console.log('Server closed!')
  server.close()
}, 10000)

// ! nc -w 30 localhost 3000
