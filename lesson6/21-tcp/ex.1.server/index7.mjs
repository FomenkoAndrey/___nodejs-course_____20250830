import { createServer } from 'node:net'

const server = createServer()

server.on('connection', (socket) => {
  console.log('New client connected!')

  socket.setEncoding('utf-8')

  socket.write('Welcome aboard!\n')

  server.getConnections((error, connections) => {
    if (error) {
      console.error('Error getting connections', error)
      return
    }

    console.log(`${connections} users connected to our server`)

    socket.write(`${connections} users connected to our server\n`)
  })

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
  const { port } = server.address()
  console.log(`TCP Server started on port ${port}!`)
})
