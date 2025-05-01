import { rootHtmlTemplate } from '../utils/templates.mjs'
import * as logger from '../utils/logger.mjs'

// root
export const getHomePage = async (req, res) => {
  try {
    logger.log('Відображення головної сторінки')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(rootHtmlTemplate)
  } catch (error) {
    logger.error('Помилка при відображенні головної сторінки', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}

// text
export const getTextPage = async (req, res) => {
  try {
    logger.log('Відображення текстової сторінки')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Текстова сторінка для прикладу')
  } catch (error) {
    logger.error('Помилка при відображенні текстової сторінки', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}

// Not found
export const getNotFoundPage = async (req, res) => {
  try {
    logger.log(`Сторінку не знайдено: ${req.url}`)
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(notFoundHtmlTemplate)
  } catch (error) {
    logger.error(`Помилка при відображенні сторінки 404: ${error}`)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}
