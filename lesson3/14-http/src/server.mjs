import http from 'http'
import { setupGlobalErrorHandlers } from './middleware/errorHandler.mjs'
import { handleRequest } from './routers/router.mjs'
import { initFormTemplate } from './controllers/formController.mjs'
import { SERVER_CONFIG } from './config/index.mjs'

setupGlobalErrorHandlers()

initFormTemplate().catch((error) => {
  console.error('Помилка при ініціалізації шаблону форми:', error)
})

const server = http.createServer(handleRequest)

server.listen(SERVER_CONFIG.PORT, () => {
  console.log(`Server is running on port http://${SERVER_CONFIG.HOST}:${SERVER_CONFIG.PORT}`)
})

process.on('SIGINT', () => {
  console.log('Сервер переривається користувачем (Ctrl+C)...')
  server.close(() => {
    console.log('Сервер закрито після переривання')
  })
})

process.on('SIGTERM', () => {
  console.log('Сервер отримав запит на завершення від системи...')
  server.close(() => {
    console.log('Сервер закрито після системного запиту')
  })
})
