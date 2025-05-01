import 'dotenv/config'

export const SERVER_CONFIG = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost'
}

export const FILE_PATHS = {
  TEMPLATES_DIR: './src/views',
  FORM_TEMPLATE: './src/views/form.html'
}
