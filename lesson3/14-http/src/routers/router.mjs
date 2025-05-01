import { getHomePage, getTextPage, getNotFoundPage } from '../controllers/pageController.mjs'
import { getTodosJSON, getTodos, createTodo } from '../controllers/todoController.mjs'
import { getForm } from '../controllers/formController.mjs'
import { errorHandler } from '../middleware/errorHandler.mjs'
import * as logger from '../utils/logger.mjs'

export const handleRequest = async (req, res) => {
  try {
    logger.log(`Обробка запиту: ${req.method} ${req.url}`)

    if (req.method === 'GET') {
      if (req.url === '/') {
        return await getHomePage(req, res)
      }

      if (req.url === '/text') {
        return await getTextPage(req, res)
      }

      if (req.url === '/json') {
        return await getTodosJSON(req, res)
      }

      if (req.url === '/todos') {
        return await getTodos(req, res)
      }

      if (req.url === '/form') {
        return await getForm(req, res)
      }
    }

    if (req.method === 'POST') {
      if (req.url === '/todos') {
        return await createTodo(req, res)
      }
    }

    return await getNotFoundPage(req, res)
  } catch (error) {
    errorHandler(error, req, res)
  }
}
