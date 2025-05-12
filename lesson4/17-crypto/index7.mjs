import crypto from 'node:crypto'

const algorithm = 'aes-192-cbc'
const password = 'fk6sg5kdh4gdo6ui4u5928hsd4fh3ld4ds243542356hf'
const key = crypto.scryptSync(password, 'salt', 24)
const iv = Buffer.alloc(16, 0)

const cipher = crypto.createCipheriv(algorithm, key, iv)

let encrypted = cipher.update(
    JSON.stringify([
      {
        name: 'John',
        age: 25,
        skills: ['html', 'css', 'javascript']
      }
    ]),
    'utf8',
    'hex'
)

encrypted += cipher.final('hex')

console.log(encrypted)
