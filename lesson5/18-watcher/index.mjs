import { watch } from 'node:fs/promises'

async function watchDirectory(directory) {
  const watcher = watch(directory)

  for await (const event of watcher) {
    console.log(`File "${event.filename}" was "${event.eventType}". \n\tDetails:`, event)
  }
}

watchDirectory('./watchDirectory').catch(console.error)
