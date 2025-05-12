import { createGzip } from 'node:zlib'
import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'

createServer((request, response) => {
  const index = createReadStream('./data/index.html')

  let acceptEncoding = request.headers['accept-encoding'] // `gzip, deflate, br`

  if (!acceptEncoding) {
    acceptEncoding = ''
  }

  if (Array.isArray(acceptEncoding)) {
    acceptEncoding = acceptEncoding.join(',')
  }

  if (/\bgzip\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'gzip' })

    index.pipe(createGzip()).pipe(response)
  } else {
    response.writeHead(200, {})

    index.pipe(response)
  }
}).listen(3000)
