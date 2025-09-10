import * as logger from '../utils/logger.mjs'
import { HTTP_STATUS, CONTENT_TYPE } from '../config/http.mjs'

// Обробник помилок на рівні HTTP запитів (middleware)
// Використовується в маршрутизаторі для обробки помилок, що виникають під час обробки HTTP запитів
// Формує HTTP відповідь з кодом 500 для клієнта
export const requestErrorHandler = (error, req, res) => {
  logger.error('Необроблена помилка HTTP запиту:', error)

  // Якщо відповідь ще не відправлена
  if (!res.headersSent) {
    res.statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR
    res.setHeader('Content-Type', CONTENT_TYPE.TEXT)
    res.end('Внутрішня помилка сервера')
  }
}

// Обробник помилок для контролерів
// Використовується всередині блоків catch у функціях контролерів
// Дозволяє вказати конкретне повідомлення про помилку в логах
export const handleControllerError = (error, res, message = 'Внутрішня помилка сервера') => {
  logger.error(message, error)
  res.statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR
  res.setHeader('Content-Type', CONTENT_TYPE.TEXT)
  res.end('Внутрішня помилка сервера')
}

// Налаштування глобальних обробників помилок для Node.js процесу
// Ці обробники перехоплюють помилки на рівні всього додатку,
// які не були перехоплені іншими try-catch блоками
export const setupGlobalErrorHandlers = () => {
  // Необроблені винятки в синхронному коді
  process.on('uncaughtException', (err) => {
    logger.error('Необроблений виняток у процесі Node.js:', err)
  })

  // Необроблені відмови промісів (помилки в асинхронному коді)
  process.on('unhandledRejection', (reason) => {
    logger.error('Необроблена відмова промісу у процесі Node.js:', reason)
  })
}
