import { Todo } from '../models/Todo'

export const fetchTodos = (): Promise<Todo[]> => {
  return Promise.resolve([
    new Todo('Todo 1', false, false),
    new Todo('Todo2', false, false),
  ])
}
