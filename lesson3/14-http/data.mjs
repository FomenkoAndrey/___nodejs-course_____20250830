import fs from 'node:fs/promises'

export const createHtmlTemplate = (htmlInjection) => `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HTTP Server</title>
    </head>
    
    <body style="font-family: Arial, Helvetica, sans-serif;">
    
      <div style="width: min(100% - 40px, 992px); margin-inline: auto;">
        ${htmlInjection}
      </div>
    
    </body>
    
    </html>
`

export const rootHtmlTemplate = createHtmlTemplate('<h1>Hello from HTTP server</h1>')

export const notFoundHtmlTemplate = createHtmlTemplate('<h1>Page not found</h1>')

let formTemplate = ''

const loadFormTemplate = async () => {
  try {
    formTemplate = await fs.readFile('./templates/form.html')
  } catch (error) {
    console.error('Error reading form.html file')
  }
}

loadFormTemplate()

export const generateTodosTemplate = () => {
  const todosHtml = todos.map(todo => `
    <div>
      <h2>${todo.title}</h2>
      <p>User ID: ${todo.userId}</p>
      <p>ID: ${todo.id}</p>
      <p>Completed: ${todo.completed}</p>
    </div>
  `).join('')

  const buttonHtml = `<button onclick="window.location.href = '/form'" type="button">Add new todo</button>`

  return createHtmlTemplate(`${todosHtml}${buttonHtml}`)
}

export const todos = [
  {
    'userId': 1,
    'id': 1,
    'title': 'delectus aut autem',
    'completed': false
  },
  {
    'userId': 1,
    'id': 2,
    'title': 'quis ut nam facilis et officia qui',
    'completed': false
  },
  {
    'userId': 1,
    'id': 3,
    'title': 'fugiat veniam minus',
    'completed': false
  },
  {
    'userId': 1,
    'id': 4,
    'title': 'et porro tempora',
    'completed': true
  },
  {
    'userId': 1,
    'id': 5,
    'title': 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    'completed': false
  }
]

export { formTemplate }
