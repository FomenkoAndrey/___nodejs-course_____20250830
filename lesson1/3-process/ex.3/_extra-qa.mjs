// ! new process, child process
// const {fork} = require('child_process')
//
// const child = fork('index2.js')
//
// child.on('message', (msg) => {
//     console.log('Message from child:', msg)
// }

// ! thread
// const { Worker } = require('worker_threads')
// const worker = new Worker('worker.js')
// worker.on('message', (msg) => {
//   console.log('Message from worker:', msg)
// })
// worker.on('exit', (code) => {
//   console.log('Worker exited with code:', code)
// })
