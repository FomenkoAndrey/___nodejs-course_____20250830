import { createServer } from 'node:net'

const server = createServer()

server.on('error', (error) => {
  console.error('Server error:', error)
})

server.on('connection', (socket) => {
  console.log('New client connected!')

  socket.setEncoding('utf-8')

  socket.on('data', (msg) => {
    console.log(`Data from client: ${msg}`)
    socket.write(`${msg}`)
  })

  socket.on('error', (error) => {
    console.error('Socket error:', error)
  })

  socket.on('end', () => {
    console.log('Client is disconnected!')
  })
})

server.listen(3000, () => {
  const { port } = server.address()
  console.log(`TCP Server started on port ${port}!`)
})
