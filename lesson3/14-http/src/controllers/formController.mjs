import { loadFormTemplate } from '../utils/templates.mjs'
import * as logger from '../utils/logger.mjs'
import { handleControllerError } from '../middleware/errorHandlers.mjs'
import { HTTP_STATUS, CONTENT_TYPE } from '../config/http.mjs'

let formTemplate = null

export const initFormTemplate = async () => {
  formTemplate = await loadFormTemplate()
  return formTemplate
}

export const getForm = async (req, res) => {
  try {
    logger.log('Form template loaded')

    if (!formTemplate) {
      logger.error('Form template not loaded')
      res.statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR
      res.setHeader('Content-Type', CONTENT_TYPE.TEXT)
      res.end('Form template not loaded')
    } else {
      res.statusCode = HTTP_STATUS.OK
      res.setHeader('Content-Type', CONTENT_TYPE.HTML)
      res.end(formTemplate)
    }
  } catch (error) {
    handleControllerError(error, res, 'Error getting form template')
  }
}
