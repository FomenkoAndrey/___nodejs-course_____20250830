import os from 'node:os'

const uptime = os.uptime()

const uptimeM = Math.round(os.uptime() / 60)

const uptimeH = Math.round(os.uptime() / 60 / 60)

const uptimeD = Math.round(os.uptime() / 60 / 60 / 24)

console.log(`Uptime: ${uptime} seconds`)
console.log(`Uptime: ${uptimeM} minutes`)
console.log(`Uptime: ${uptimeH} hours`)
console.log(`Uptime: ${uptimeD} days`)
