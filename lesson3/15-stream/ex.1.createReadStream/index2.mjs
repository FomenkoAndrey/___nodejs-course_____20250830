import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  const filePath = './index.html'

  // ! Stream
  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    readStream.pipe(res)
  }

  // ! No stream
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  }
})

server.listen(3000, () => console.log('Server is listening at port 3000'))
