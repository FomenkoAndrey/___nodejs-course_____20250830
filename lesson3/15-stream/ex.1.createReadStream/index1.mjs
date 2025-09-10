import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer((req, res) => {
  const filePath = './index.html'

  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    readStream.pipe(res)
  }
})

server.listen(3000, () => console.log('Server is listening at port 3000'))
