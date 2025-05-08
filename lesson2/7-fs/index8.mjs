import fs from 'node:fs/promises'

async function createAndRenameFile(sourcePath, destPath) {
  try {
    await fs.writeFile(sourcePath, 'Hello, World!')
    await fs.rename(sourcePath, destPath)
    console.log(`File ${sourcePath} has been successfully renamed to ${destPath}.`)
  } catch (error) {
    console.error(`Error renaming file ${sourcePath} to ${destPath}:`, error)
  }
}

createAndRenameFile('./source.txt', './target.txt')
