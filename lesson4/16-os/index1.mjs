import os from 'node:os'

if (os.EOL === '\n') {
  console.log(`You are working with line \n delimiter. Posix`)
} else if (os.EOL === '\r\n') {
  console.log(String.raw`You are working with line \r\n delimiter. Windows`)
}
