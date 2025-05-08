import { mkdir } from 'node:fs/promises'

async function createDirectory(dirPath) {
  try {
    await mkdir(dirPath)
    console.log(`Directory ${dirPath} has been successfully created.`)
  } catch (error) {
    console.error(`Error creating directory ${dirPath}:`, error.message)
  }
}

createDirectory('./tempDirectory')
