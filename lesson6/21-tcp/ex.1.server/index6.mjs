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

  socket.on('end', () => {
    console.log('Client is disconnected!')
  })
})

server.listen(3000, () => {
  const { address, family, port } = server.address()

  console.log(`Address: ${address}`)
  console.log(`Protocol: ${family}`)
  console.log(`TCP Server started on port ${port}!`)
})

setTimeout(() => {
  console.log('Server closed!')
  server.close()
}, 10000)
