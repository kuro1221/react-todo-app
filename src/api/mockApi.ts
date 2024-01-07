import { Todo } from '../models/Todo'

let todos = [
  new Todo(1, 'Todo 1', false, false),
  new Todo(2, 'Todo 2', false, false),
  new Todo(3, 'Todo 2', false, false),
]

export const fetchActiveTodos = (): Promise<Todo[]> => {
  todos = todos.filter((todo) => !todo.complete_flg && !todo.delete_flg)
  return Promise.resolve(todos)
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
