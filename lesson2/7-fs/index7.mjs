import { unlink } from 'node:fs/promises'

async function deleteFile(filePath) {
  try {
    await unlink(filePath)
    console.log(`File ${filePath} has been successfully deleted.`)
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error.message)
  }
}

deleteFile('./output.txt')
