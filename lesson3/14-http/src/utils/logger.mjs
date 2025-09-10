// Функція для логування
export const log = (message, data = null) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}`
  
  if (data) {
    console.log(logMessage, data)
  } else {
    console.log(logMessage)
  }
}

// Функція для логування помилок
export const error = (message, error = null) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] [ERROR] ${message}`
  
  if (error) {
    console.error(logMessage, error)
  } else {
    console.error(logMessage)
  }
}

// Аліаси для сумісності з існуючим кодом
export const warn = log
export const info = log
export const debug = log 
