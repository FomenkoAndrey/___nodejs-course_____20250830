import os from 'node:os'

const release = os.release()

console.log(release)

if (os.platform() === 'win32') {
  const version = parseInt(release.split('.')[0])

  if (version < 10) {
    console.log('You are using an outdated version of Windows. Please update your system.')
  } else {
    console.log('You are using a current version of Windows.')
  }
} else {
  console.log('You are not using Windows.')
}
