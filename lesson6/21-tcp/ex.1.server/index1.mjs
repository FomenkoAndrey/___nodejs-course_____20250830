import { createServer } from 'node:net'

const server = createServer()

server.on('connection', (socket) => {
  console.log('New client connected!')

  socket.write('Welcome aboard!\n')
})

server.listen(3000, () => {
  console.log('TCP Server started!')
})

/*
 netcat → nc (Mac, UNIX)
 ! nc localhost 3000 - треба встановити netcat (в мене сервер вилітає при завершенні nc)

 ~ nc -w 2 localhost 3000 -> автоматичний вихід через 2 секунди (проблем не буде)

 або telnet (для Windows його ще треба встановити в компонентах системи)
 ! telnet localhost 3000
 ! CTRL+] -> quit + ENTER для выходу
*/
