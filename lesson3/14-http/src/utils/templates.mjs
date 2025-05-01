import fs from 'node:fs/promises'
import { FILE_PATHS } from '../config/index.mjs'

// Функція для створення HTML шаблону
export const createHTMLTemplate = (htmlInjection) => `
    <!DOCTYPE html>
    <html lang='en'>
    
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>HTTP server</title>
    </head>
    
    <body style='font-family: Arial, sans-serif'>
      <div style='width: min(100% - 40px, 992px); margin-inline: auto;'>
          ${htmlInjection}
      </div>  
    </body>
    
    </html>
    `

// Базові шаблони
export const rootHtmlTemplate = createHTMLTemplate(
  '<h1>Hello from HTTP server</h1><a href="/form">Form</a>&nbsp;<a href="/todos">Todos</a>'
)
export const notFoundTemplate = createHTMLTemplate('<h1>404 - Page not found</h1>')

// Шаблон для списку todos
export const generateTodosTemplate = (todos) => {
  const headerHTML = `<h1>Todos list</h1>`

  // Перетворюємо кожне завдання в HTML-рядок
  const todosHTML = todos
    .map(
      (todo) => `
    <div>
      <h2>${todo.title}</h2>
      <p>User ID: ${todo.userId}</p>
      <p>ID: ${todo.id}</p>
      <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
    </div>
  `
    )
    .join('')

  // Додаємо кнопку для переходу на сторінку /form
  const buttonHTML = `<button onclick="location.href='/form'" type='button'>Submit one more todo</button>`

  // Вставляємо HTML-рядки завдань і кнопку в шаблон сторінки
  return createHTMLTemplate(`${headerHTML}${todosHTML}${buttonHTML}`)
}

// Завантаження шаблону форми
export const loadTemplate = async (path) => {
  try {
    const fileContent = await fs.readFile(path, 'utf-8')
    console.log(`Шаблон ${path} завантажено`)
    return fileContent
  } catch (err) {
    console.error(`Помилка читання файлу ${path}:`, err)
    return null
  }
}

// Завантаження шаблону форми
export const loadFormTemplate = async () => {
  return await loadTemplate(FILE_PATHS.FORM_TEMPLATE)
}
