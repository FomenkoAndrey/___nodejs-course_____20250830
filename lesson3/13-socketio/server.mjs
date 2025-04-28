import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()

app.use(cors())

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log('Користувач підключився')

  socket.on('disconnect', () => {
    console.log('--- Користувач відключився ---')
  })
})

server.listen(3000, () => {
  console.log('Сервер прослуховує порт 3000')
})
