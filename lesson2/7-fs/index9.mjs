import { access } from 'node:fs/promises'

async function checkFileAccess(filePath) {
  try {
    await access(filePath)
    console.log(`We have access to the file ${filePath}.`)
  } catch (error) {
    console.error(`Error checking access to file ${filePath}:`, error)
  }
}

checkFileAccess('./input.txt')
checkFileAccess('./target.txt')
