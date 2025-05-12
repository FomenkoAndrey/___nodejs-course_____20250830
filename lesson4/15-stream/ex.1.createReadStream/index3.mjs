import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  const filePath = './index.html'

  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath)

    readStream.on('error', (err) => {
      console.error('Error reading file:', err)
      res.statusCode = 500
      res.end('Internal server error')
    })

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    readStream.pipe(res)
  }

  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err)
        res.statusCode = 500
        res.end('Internal server error')
        return
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  }
})

server.listen(3000, () => console.log('Server is listening at port 3000'))
