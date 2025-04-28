import http from 'node:http'
import { generate404, generateForm, generateHtml, generateJson, generateText, generateTodos, postData } from './api.mjs'

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return generateHtml(req, res)
  }

  if (req.method === 'GET' && req.url === '/text') {
    return generateText(req, res)
  }

  if (req.method === 'GET' && req.url === '/json') {
    return generateJson(req, res)
  }

  if (req.method === 'GET' && req.url === '/todos') {
    return generateTodos(req, res)
  }
  if (req.method === 'POST' && req.url === '/todos') {
    return postData(req, res)
  }

  if (req.method === 'GET' && req.url === '/form') {
    return generateForm(req, res)
  }

  generate404(res, res)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
