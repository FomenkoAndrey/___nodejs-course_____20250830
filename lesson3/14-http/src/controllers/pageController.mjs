import { rootHtmlTemplate, notFoundTemplate } from '../utils/templates.mjs'
import * as logger from '../utils/logger.mjs'
import { handleControllerError } from '../middleware/errorHandlers.mjs'
import { HTTP_STATUS, CONTENT_TYPE } from '../config/http.mjs'

export const getHomePage = async (req, res) => {
  try {
    logger.log('Home page loaded')
    res.statusCode = HTTP_STATUS.OK
    res.setHeader('Content-Type', CONTENT_TYPE.HTML)
    res.end(rootHtmlTemplate)
  } catch (error) {
    handleControllerError(error, res, 'Error getting home page')
  }
}

export const getTextPage = async (req, res) => {
  try {
    logger.log('Text page loaded')
    res.statusCode = HTTP_STATUS.OK
    res.setHeader('Content-Type', CONTENT_TYPE.TEXT)
    res.end('Plain text response: Hello from HTTP server')
  } catch (error) {
    handleControllerError(error, res, 'Error getting text page')
  }
}

export const getNotFoundPage = async (req, res) => {
  try {
    logger.log('Not found page loaded')
    res.statusCode = HTTP_STATUS.NOT_FOUND
    res.setHeader('Content-Type', CONTENT_TYPE.HTML)
    res.end(notFoundTemplate)
  } catch (error) {
    handleControllerError(error, res, 'Error getting not found page')
  }
}
