import fs from 'node:fs/promises'

const sourceDir = 'output'
const destinationDir = 'output-copy'

async function copyDirectory() {
  try {
    await fs.access(sourceDir)
    try {
      await fs.access(destinationDir)
      await fs.rm(destinationDir, { recursive: true, force: true })
      console.log('Destination directory was removed')
    } catch (err) {
      // some error occurred, no such file or directory
    }
    await fs.mkdir(destinationDir)
    console.log('Destination directory was created')
  } catch (err) {
    console.log(`Source dir ${sourceDir} does not exist`)
    console.log('Exit!')
    process.exit(1)
  }
}

copyDirectory().catch(console.log)
