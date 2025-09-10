import http from 'http'
import { generateHTML, generateText, generateJSON, generateNotFound, postData, generateForm } from './api.mjs'

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    return generateHTML(req, res)
  }

  if (req.url === '/text' && req.method === 'GET') {
    return generateText(req, res)
  }

  if (req.url === '/json' && req.method === 'GET') {
    return generateJSON(req, res)
  }

  if (req.url === '/todos' && req.method === 'GET') {
    return generateJSON(req, res)
  }
  if (req.url === '/todos' && req.method === 'POST') {
    return postData(req, res)
  }

  if (req.url === '/form' && req.method === 'GET') {
    return generateForm(req, res)
  }

  generateNotFound(req, res)
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
