// Функція для читання тіла запиту
export const readRequestBody = async (req) => {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => resolve(body))
    req.on('error', (err) => reject(err))
  })
}

// Функція для парсингу параметрів запиту
export const parseQueryParams = (url) => {
  const [, queryString] = url.split('?')
  if (!queryString) return {}
  
  return queryString.split('&').reduce((params, param) => {
    const [key, value] = param.split('=')
    params[key] = value
    return params
  }, {})
} 
