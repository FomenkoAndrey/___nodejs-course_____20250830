import { stat } from 'node:fs/promises'

async function getFileInfo(filePath) {
  try {
    const stats = await stat(filePath)
    console.log(`Information about the file ${filePath}:`, stats)
  } catch (error) {
    console.error(`Error getting information about the file ${filePath}:`, error)
  }
}

getFileInfo('./target.txt')
getFileInfo('./input.txt')
