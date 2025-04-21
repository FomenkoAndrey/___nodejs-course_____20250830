const email = 'john@email'
const password = '123'

console.log('base 64 string:', Buffer.from(`${email}:${password}`).toString('base64'))

console.log('hexadecimal string:', Buffer.from(`${email}:${password}`).toString('hex'))
