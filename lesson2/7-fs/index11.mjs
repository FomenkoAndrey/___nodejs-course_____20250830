import { rmdir } from 'node:fs/promises'

async function deleteDirectory(dirPath) {
  try {
    await rmdir(dirPath)
    console.log(`Directory ${dirPath} has been successfully deleted.`)
  } catch (error) {
    console.error(`Error deleting directory ${dirPath}:`, error)
  }
}

deleteDirectory('./tempDirectory')
