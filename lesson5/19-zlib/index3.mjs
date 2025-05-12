import { createGzip } from 'zlib'
import { get } from 'https'
import { createWriteStream } from 'fs'

const photosWritableStream = createWriteStream('./data/photos.json.gz')

get('https://jsonplaceholder.typicode.com/photos', (data) => {
  data.pipe(createGzip()).pipe(photosWritableStream)
})
