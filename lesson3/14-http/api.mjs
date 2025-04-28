import { formTemplate, generateTodosTemplate, notFoundHtmlTemplate, rootHtmlTemplate, todos } from './data.mjs'
import querystring from 'node:querystring'

export const generateHtml = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  return res.end(rootHtmlTemplate)
}

export const generateText = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  return res.end('Plain text from HTTP server')
}

export const generateTodos = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  return res.end(generateTodosTemplate())
}

export const generateForm = (req, res) => {
  if (!formTemplate) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    return res.end('Form template is not ready')
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(formTemplate)
  }
}

export const generateJson = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  return res.end(JSON.stringify(todos))
}

export const postData = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let dataForm = ''

    req.on('data', (chunk) => {
      dataForm += chunk
    })

    req.on('end', () => {
      try {
        let todo = querystring.parse(dataForm)
        todo = {
          id: +todo['id'],
          title: todo['title'],
          userId: +todo['userId'],
          completed: todo['completed'] === 'on'
        }

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
    let dataJson = ''

    req.on('data', (chunk) => {
      dataJson += chunk
    })

    req.on('end', () => {
      try {
        todos.push(JSON.parse(dataJson))
        res.statusCode = 201
        res.end('Todo data was received')
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid JSON data')
      }
    })
  } else {
    res.statusCode = 400
    res.end('Todo must be in JSON format')
  }
}

export const generate404 = (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end(notFoundHtmlTemplate)
}
