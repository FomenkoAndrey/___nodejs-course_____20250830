import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { privateDecrypt } from 'node:crypto'

const privateKey = readFileSync(join(process.cwd(), 'keys', 'privateKey.pem'), 'utf8')

const encryptedFromFile = readFileSync(join(process.cwd(), 'keys', 'encrypted.txt'))

const decrypted = privateDecrypt(privateKey, encryptedFromFile)

console.log('Decrypted:', decrypted.toString())
