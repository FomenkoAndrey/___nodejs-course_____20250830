import { rootHtmlTemplate, todos, notFoundTemplate, loadFormTemplate, generateTodosTemplate } from './data.mjs'
import querystring from 'querystring'

const generateHTML = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(rootHtmlTemplate)
}

const generateForm = (req, res) => {
  const formTemplate = loadFormTemplate()
  if (!formTemplate) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('Form template not loaded')
    return
  }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(formTemplate)
}

const generateText = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Plain text response: Hello from HTTP server')
}

const generateJSON = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(todos))
}

const generateNotFound = (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end(notFoundTemplate)
}

const postData = (req, res) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = ''

    req.on('data', (chunk) => (body += chunk.toString()))

    req.on('end', () => {
      try {
        let todo = querystring.parse(body)

        todo = {
          id: +todo.id,
          title: todo.title,
          userId: +todo.userId,
          completed: todo.completed === 'on'
        }

        console.log('🚀 ~ req.on ~ todo:', todo)
        todos.push(todo)

        res.statusCode = 201
        res.setHeader('Content-Type', 'text/html')
        res.end(generateTodosTemplate())
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid form data')
      }
    })
  } else if (req.headers['content-type'] === 'application/json') {
    let dataJSON = ''

    req.on('data', (chunk) => (dataJSON += chunk))

    req.on('end', () => {
      todos.push(JSON.parse(dataJSON))
      res.statusCode = 201
      res.setHeader('Content-Type', 'application/json')
      res.end(dataJSON)
    })
  } else {
    res.statusCode = 400
    res.end('Invalid content type')
  }
}

export { generateHTML, generateText, generateJSON, generateNotFound, postData, generateForm }
