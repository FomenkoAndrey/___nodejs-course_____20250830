import { loadFormTemplate } from '../utils/templates.mjs'
import * as logger from '../utils/logger.mjs'

let formTemplate = null

export const initFormTemplate = async () => {
  formTemplate = await loadFormTemplate()
  return formTemplate
}

export const getForm = async (req, res) => {
  try {
    logger.log('Відображення форми')

    if (!formTemplate) {
      formTemplate = await initFormTemplate()
      logger.error('Шаблон форми не знайдений')
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('Помилка: Шаблон форми не знайдений')

    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(formTemplate)
    }
  } catch (error) {
    logger.error('Помилка при відображенні форми', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Внутрішня помилка сервера')
  }
}
