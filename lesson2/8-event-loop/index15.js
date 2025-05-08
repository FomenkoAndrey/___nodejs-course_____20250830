const fs = require('fs')
const dns = require('dns')

const time = () => `${performance.now().toFixed(2)} ms:`

console.log(time(), 'start')

setTimeout(() => console.log(time(), 'Timeout1'), 0)
setTimeout(() => console.log(time(), 'Timeout2'), 20)

setImmediate(() => console.log(time(), 'Immediate'))

// ! Черга мікрозадач
queueMicrotask(() => console.log(time(), 'queueMicrotask'))
// ^ Promise.resolve().then(() => console.log(time(), 'Promise'))

process.nextTick(() => console.log(time(), 'nextTick'))

fs.writeFile('./temp.txt', 'Hello', () => console.log(time(), 'writeFile'))

dns.lookup('localhost', (err, address) => {
  console.log(time(), 'DNS:', address)
  // ! Черга мікрозадач
  queueMicrotask(() => console.log(time(), 'queueMicrotask IN_DNS'))
  // ^ Promise.resolve().then(() => console.log(time(), 'Promise IN_DNS'))

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


 ! Output:
 26.92 ms: start
 34.40 ms: end
 35.19 ms: nextTick
 35.29 ms: Promise
 35.63 ms: Timeout1
 38.02 ms: DNS: ::1
 38.30 ms: nextTick IN_DNS
 38.54 ms: Promise IN_DNS
 38.84 ms: Immediate
 39.32 ms: writeFile
 51.83 ms: Timeout2

*/
