import { config } from 'dotenv'

config()

console.log('DB_USERNAME:', process.env.DB_USERNAME)
console.log('DB_PASSWORD:', process.env.DB_PASSWORD)
console.log('     DB_URL:', process.env.DB_URL)
