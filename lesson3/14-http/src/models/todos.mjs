// Модель для todos
export const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  }
]

// Функція для додавання нового todo
export const addTodo = (todo) => {
  todos.push(todo)
  return todo
}

// Функція для валідації todo
export const validateTodo = (todo) => {
  if (!todo) return false
  if (typeof todo.id !== 'number') return false
  if (typeof todo.title !== 'string' || todo.title.trim() === '') return false
  if (typeof todo.userId !== 'number') return false
  if (typeof todo.completed !== 'boolean') return false
  return true
}
