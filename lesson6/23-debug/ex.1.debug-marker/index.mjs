import debug from 'debug'
import chalk from 'chalk'

const debugLog = debug('marker')

debugLog('Debug message start')

console.log(chalk.green('Message:'), chalk.black.bgGreenBright('Hello from node.js'))

console.log(chalk.red('process.env.DEBUG:'), chalk.black.bgRedBright(process.env.DEBUG))

debugLog('Debug message end')
