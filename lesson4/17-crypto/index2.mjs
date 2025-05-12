import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { publicEncrypt } from 'node:crypto'

const publicKey = readFileSync(join(process.cwd(), 'keys', 'publicKey.pem'), 'utf8')

const text = 'Hello, world!'

const encrypted = publicEncrypt(publicKey, Buffer.from(text))

writeFileSync(join(process.cwd(), 'keys', 'encrypted.txt'), encrypted)

console.log('Encrypted:', encrypted.toString())
