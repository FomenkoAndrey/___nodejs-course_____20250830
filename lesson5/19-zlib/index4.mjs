import { createGunzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'

const photosReadableStream = createReadStream('./data/photos.json.gz')
const photosWritableStream = createWriteStream('./data/photos.json')

const gUnZip = createGunzip()

photosReadableStream.pipe(gUnZip).pipe(photosWritableStream)
