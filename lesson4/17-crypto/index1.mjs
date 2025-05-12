import { generateKeyPairSync } from 'node:crypto'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

let algorithm = 'rsa'
let bits = 2048

let keypair = generateKeyPairSync(algorithm, {
  modulusLength: bits,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
})

const keysDir = join(process.cwd(), 'keys')
if (!existsSync(keysDir)) {
  mkdirSync(keysDir)
}

writeFileSync(join(keysDir, 'publicKey.pem'), keypair.publicKey)

writeFileSync(join(keysDir, 'privateKey.pem'), keypair.privateKey)
