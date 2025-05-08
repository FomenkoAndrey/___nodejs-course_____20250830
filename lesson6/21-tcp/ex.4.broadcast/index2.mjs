import { createServer } from 'net'

let id = 0
let clients = []

const server = createServer()

server.on('connection', (socket) => {
  socket.id = id++
  console.log('New client connected!')
  socket.setEncoding('utf-8')

  socket.write('Please enter your name: ')

  socket.on('data', (msg) => {
    if (!clients[socket.id]) {
      socket.name = msg.trim()
      socket.write(`Welcome aboard ${socket.name}!\n`)
      clients[socket.id] = socket
      return
    }
    clients.forEach((clientSocket, index) => {
      if (socket.id === index) return
      clientSocket.write(`${socket.name} ${new Date().toLocaleTimeString()}: `)
      clientSocket.write(msg)
    })
  })

  socket.on('end', () => {
    clients = clients.filter((clientSocket, index) => index !== socket.id)
    console.log('Client is disconnected!')
  })
})

server.listen(3000, () => {
  const { port } = server.address()
  console.log(`TCP Server started on port ${port}!`)
})
