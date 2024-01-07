import { Todo } from '../models/Todo'

let todos = [
  new Todo(1, 'Todo 1', false, false),
  new Todo(2, 'Todo 2', false, false),
  new Todo(3, 'Todo 2', false, false),
]

export const fetchActiveTodos = (): Promise<Todo[]> => {
  return Promise.resolve(todos)
}

export const deleteTodo = (id: number): Promise<void> => {
  todos = todos.filter((todo) => todo.id !== id)
  console.log(todos)
  return Promise.resolve()
}
