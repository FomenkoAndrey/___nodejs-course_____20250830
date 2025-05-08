import http from 'node:http'

const server = http.createServer((req, res) => {
// Тут ми можемо додати код для обробки запитів
})

server.listen(3030, () => {
  console.log('Server listen on port 3030')
})

setTimeout(() => {
  server.close(() => process.exit())
}, 3000)

setInterval(() => {
  console.log(process.memoryUsage())
}, 1000)
