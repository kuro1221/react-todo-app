import { Todo } from '../models/Todo'

let todos = [
  new Todo(1, 'Todo 1', false, false, '読書'),
  new Todo(2, 'Todo 2', false, false, ''),
  new Todo(3, 'Todo 3', false, false, ''),
]

export const fetchActiveTodos = (): Promise<Todo[]> => {
  todos = todos.filter((todo) => !todo.complete_flg && !todo.delete_flg)
  return Promise.resolve(todos)
}

export const addTodo = (text: string): Promise<void> => {
  const id = todos.length + 1
  const todo = new Todo(id, text, false, false, '')
  todos.push(todo)

  return Promise.resolve()
}

export const deleteTodo = (id: number): Promise<void> => {
  todos = todos.map((todo) => {
    if (todo.id === id) todo.delete_flg = true
    return todo
  })
  return Promise.resolve()
}

export const completeTodo = (id: number): Promise<void> => {
  todos = todos.map((todo) => {
    if (todo.id === id) todo.complete_flg = true
    return todo
  })

  return Promise.resolve()
}

export const changeTagToTodo = (id: number, tag: string): Promise<void> => {
  todos = todos.map((todo) => {
    if (todo.id === id) todo.tag = tag
    return todo
  })

  return Promise.resolve()
}
