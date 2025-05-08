const fs = require('fs')
const dns = require('dns')

const time = () => `${performance.now().toFixed(2)} ms:`

console.log(time(), 'start')

setTimeout(() => console.log(time(), 'Timeout1'), 0)
setTimeout(() => console.log(time(), 'Timeout2'), 20)

setImmediate(() => console.log(time(), 'Immediate'))

Promise.resolve().then(() => console.log(time(), 'Promise'))

process.nextTick(() => console.log(time(), 'nextTick'))

fs.writeFile('./temp.txt', 'Hello', () => console.log(time(), 'writeFile'))

dns.lookup('localhost', (err, address) => {
  console.log(time(), 'DNS:', address)
  Promise.resolve().then(() => console.log(time(), 'Promise IN_DNS'))
  process.nextTick(() => console.log(time(), 'nextTick IN_DNS'))
})

console.log(time(), 'end')


/*
 ! Simple Diagram
 0 ms:    |---start---|
 7.48 ms: |      ---end---|
 8.27 ms: |        ---nextTick---|
 8.37 ms: |         ---Promise---|
 8.71 ms: |          ---Timeout1---|
 11.1 ms: |                ---DNS: ::1---|
 11.38 ms:|                 ---nextTick IN_DNS---|
 11.62 ms:|                  ---Promise IN_DNS---|
 11.92 ms:|                   ---Immediate---|
 12.4 ms: |                      ---writeFile---|
 24.91 ms:|                                 ---Timeout2---|
*/
