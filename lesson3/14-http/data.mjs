import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const createHTMLTemplate = (htmlInjection) => `
    <html lang="en">
      <head>
        <title>HTTP server</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTTP server</title>
      </head>
      <body style="font-family: Arial, sans-serif;">
        <div style="width: min(100% - 40px, 992px); margin-inline: auto;">
          ${htmlInjection}
        </div>
      </body>
    </html>
  `

const rootHtmlTemplate = createHTMLTemplate('<h1>Hello from HTTP server</h1>')

const notFoundTemplate = createHTMLTemplate('<h1>404<br>Not Found</h1>')

let formTemplate = null

const loadFormTemplate = () => {
  try {
    const formTemplate = fs.readFileSync('./templates/form.html')

    return formTemplate
  } catch (error) {
    console.error(error)
  }
}

loadFormTemplate()

const generateTodosTemplate = () => {
  const todosHTML = todos
    .map(
      (todo) => `
    <div>
      <h2>${todo.title}</h3>
      <p>User ID: ${todo.userId}</p>
      <p>ID: ${todo.id}</p>
      <p>Completed: ${todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  `
    )
    .join('')

  const buttonHTML = `
      <button onclick="location.href='/form'" type='button'>Submit one more todo</button>
    `

  return createHTMLTemplate(`${todosHTML}${buttonHTML}`)
}

export { rootHtmlTemplate, todos, notFoundTemplate, loadFormTemplate, generateTodosTemplate }
