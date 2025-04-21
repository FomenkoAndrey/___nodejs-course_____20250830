import { user } from './source.mjs'

try {
  user.name = 'Bob'
  user.age = 25
} catch (error) {
  console.error(error.message)
}

export { user }
