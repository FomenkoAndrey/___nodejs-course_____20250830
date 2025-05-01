import querystring from 'node:querystring'
import { todos, addTodo, validateTodo } from '../models/todos.mjs'
import { readRequestBody } from '../utils/request.mjs'
import { generateTodosTemplate } from '../utils/templates.mjs'
import * as logger from '../utils/logger.mjs'

// Отримання списку todos
export const getTodos = async (req, res) => {
  try {
    logger.log('Отримання списку todos')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(generateTodosTemplate(todos))
  } catch (error) {
    logger.error('Помилка при отриманні списку todos', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}

// Отримання списку todos у форматі JSON
export const getTodosJSON = async (req, res) => {
  try {
    logger.log('Отримання списку todos у форматі JSON')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(todos))
  } catch (error) {
    logger.error('Помилка при отриманні списку todos у форматі JSON', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}

// Додавання нового todo
export const createTodo = async (req, res) => {
  try {
    logger.log('Додавання нового todo')
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
      const body = await readRequestBody(req)

      try {
        let todo = querystring.parse(body)

        todo = {
          id: +todo['id'],
          title: todo['title'],
          userId: +todo['userId'],
          completed: todo['completed'] === 'on'
        }

        if (!validateTodo(todo)) {
          logger.log('Невірні дані форми', todo)
          res.statusCode = 400
          return res.end('Невірні дані форми: перевірте всі поля')
        }

        addTodo(todo)
        logger.log('Todo успішно додано', todo)

        res.statusCode = 201
        res.setHeader('content-type', 'text/html; charset=utf-8')
        res.end(generateTodosTemplate(todos))
      } catch (err) {
        logger.error('Помилка обробки форми', err)
        res.statusCode = 400
        res.end('Невірні дані форми')
      }
    } else if (req.headers['content-type'] === 'application/json') {
      const dataJSON = await readRequestBody(req)

      try {
        const todo = JSON.parse(dataJSON)

        if (!validateTodo(todo)) {
          logger.log('Невірні дані JSON', todo)
          res.statusCode = 400
          return res.end('Невірні дані JSON: перевірте всі поля')
        }

        addTodo(todo)
        logger.log('Todo успішно додано', todo)

        res.statusCode = 201
        res.end('Дані todo успішно отримано')
      } catch (err) {
        logger.error('Помилка обробки JSON', err)
        res.statusCode = 400
        res.end('Невірний JSON')
      }
    } else {
      logger.log('Невірний Content-Type', req.headers['content-type'])
      res.statusCode = 400
      res.end('Дані todo повинні бути у форматі JSON або форми')
    }
  } catch (error) {
    logger.error('Помилка обробки запиту', error)
    res.statusCode = 500
    res.end('Внутрішня помилка сервера')
  }
}
