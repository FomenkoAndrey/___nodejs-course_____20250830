import crypto from 'node:crypto'

const algorithm = 'aes-192-cbc'
const password = 'fk6sg5kdh4gdo6ui4u5928hsd4fh3ld4ds243542356hf'
const key = crypto.scryptSync(password, 'salt', 24)
const iv = Buffer.alloc(16, 0)

const decipher = crypto.createDecipheriv(algorithm, key, iv)

let decrypted = decipher.update(
    'a7c102f8136603cfd0aa7a69a27285d97e662d1db93403a83ee7266603fe6097c8ccc48c8be1f48287c065632b242c06c4ef7d50298b229542e0e93eaf7e9004',
    'hex',
    'utf8'
)

decrypted += decipher.final('utf8')

const decryptedObject = JSON.parse(decrypted)

console.log(decryptedObject)
