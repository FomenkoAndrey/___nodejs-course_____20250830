import { createServer } from 'net'

import winston from 'winston'
import debug from 'debug'

const server = createServer()

const debugData = debug('server:data')
const debugListening = debug('server:listening')
const debugConnect = debug('server:connection:connect')
const debugDisconnect = debug('server:connection:disconnect')

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  defaultMeta: {service: 'server'},
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({filename: 'logs/combined.log'})
  ]
})

const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout))

server.on('connection', (socket) => {
  debugConnect('New client connected!')

  socket.setEncoding('utf-8')

  socket.on('data', async (msg) => {
    debugData(msg)
    await delay(1000)

    logger.info(msg)

    socket.write(msg)
  })

  socket.on('end', () => {
    debugDisconnect('Client is disconnected!')
  })
})

server.on('listening', () => {
  const {port} = server.address()

  logger.debug(`TCP Server started on port ${port}!`)

  debugListening(`TCP Server started on port ${port}!`)
})

server.listen(3000)

// ! Відповідно до ієрархії важливості, яка виглядає так:
//             error (найбільш критичні повідомлення)
//             warn (попередження про можливі проблеми)
//             info (загальна інформація про поточний стан програми)
//             debug (деталізація для налагодження)
//             verbose (більш детальна інформація ніж info)
//             http (інформація про HTTP запити і відповіді, якщо такий рівень існує в конфігурації)
//             silly (найменше критичний, максимальна деталізація)
