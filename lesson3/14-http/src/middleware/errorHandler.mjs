import * as logger from '../utils/logger.mjs'

// Middleware для обробки помилок
export const errorHandler = (error, req, res) => {
  logger.error('Необроблена помилка:', error)

  // Якщо відповідь ще не відправлена
  if (!res.headersSent) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}

// Глобальні обробники помилок
export const setupGlobalErrorHandlers = () => {
  // Необроблені винятки
  process.on('uncaughtException', (err) => {
    logger.error('Необроблена помилка:', err)
  })

  // Необроблені відмови промісів
  process.on('unhandledRejection', (reason) => {
    logger.error('Необроблена відмова промісу:', reason)
  })
}
