import { readdir } from 'node:fs/promises'

async function listFiles(dirPath) {
  try {
    const files = await readdir(dirPath)
    console.log(`Files in the directory ${dirPath}:`, files)
  } catch (error) {
    console.error(`Error getting the list of files in the directory ${dirPath}:`, error)
  }
}

listFiles('./')
