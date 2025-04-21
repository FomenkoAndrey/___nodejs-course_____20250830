const { config } = require('./setEnv')

console.log(config.port)
console.log(config.env)

// set PORT=4000 && node index2
// set NODE_ENV=PROD && set PORT=5000 && node index2
