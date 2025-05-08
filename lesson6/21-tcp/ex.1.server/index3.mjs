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
})

server.listen(3000, () => {
  console.log('TCP Server started!')
})

/*
 ! На клієнті можемо надсилати дані на сервер:
 ~ nc -w 30 localhost 3000 -> автоматический выход через 30 секунд
 ? hello + ENTER -> Received from server: hello
*/
