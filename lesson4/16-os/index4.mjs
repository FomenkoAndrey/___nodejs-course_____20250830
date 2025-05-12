import os from 'node:os'

const memoryInBytes = os.freemem()
const memoryInKilobytes = Math.round(memoryInBytes / 1024)
const memoryInMegabytes = Math.round(memoryInBytes / 1024 / 1024)
const memoryInGigabytes = Math.round(memoryInBytes / 1024 / 1024 / 1024)

console.log(`Free memory ${memoryInBytes} bytes`)
console.log(`Free memory ${memoryInKilobytes} Kb`)
console.log(`Free memory ${memoryInMegabytes} Mb`)
console.log(`Free memory ${memoryInGigabytes} Gb`)

const totalMemoryInBytes = os.totalmem()
const totalMemoryInKilobytes = Math.round(totalMemoryInBytes / 1024)
const totalMemoryInMegabytes = Math.round(totalMemoryInBytes / 1024 / 1024)
const totalMemoryInGigabytes = Math.round(totalMemoryInBytes / 1024 / 1024 / 1024)

console.log('\n========================================\n')
console.log(`Total memory ${totalMemoryInBytes} bytes`)
console.log(`Total memory ${totalMemoryInKilobytes} Kb`)
console.log(`Total memory ${totalMemoryInMegabytes} Mb`)
console.log(`Total memory ${totalMemoryInGigabytes} Gb`)
