import { readdir, stat } from 'node:fs/promises'

async function listDirectories(dirPath) {
  const directories = await readdir(dirPath)

  for (const directory of directories) {
    const excludedDirs = ['.git', '.idea', '.vscode'];
    if (excludedDirs.includes(directory)) {
      continue;
    }

    const directoryPath = `${dirPath}/${directory}`

    const stats = await stat(directoryPath)

    if (stats.isDirectory()) {
      console.log(directoryPath.replace('//', '/'))

      await listDirectories(directoryPath)
    }
  }
}

listDirectories('../')
