function deepFreeze(object) {
  let propertyNames = Object.getOwnPropertyNames(object)

  for (let name of propertyNames) {
    let value = object[name]

    object[name] = value && typeof value === 'object' ? deepFreeze(value) : value
  }

  return Object.freeze(object)
}

export const user = deepFreeze({
  name: 'John'
})

console.log('Було:', user)
