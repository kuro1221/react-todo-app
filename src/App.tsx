import { useState, useEffect, ChangeEvent } from 'react'
import { TodoItem } from './components/TodoItem'
import { Todo } from './models/Todo'
import {
  fetchActiveTodos,
  addTodo,
  deleteTodo,
  completeTodo,
} from './api/mockApi'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetchActiveTodos().then((data) => setTodos(data))
  }, [])

  const onClickAdd = () => {
    try {
      addTodo(text)
      setText('')
    } catch (error) {
      console.log('Todo追加時エラー発生')
    }
  }

  const onClickDelete = async (id: number) => {
    try {
      await deleteTodo(id)
      await fetchActiveTodos().then((data) => setTodos(data))
    } catch (error) {
      console.log('Todo削除時エラー発生')
    }
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickComplete = async (id: number) => {
    try {
      await completeTodo(id)
      await fetchActiveTodos().then((data) => setTodos(data))
    } catch (error) {
      console.log('Todo完了時エラー発生')
    }
  }

  return (
    <div className="App p-6">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onComplete={() => onClickComplete(index)}
          onDelete={() => onClickDelete(todo.id)}
        />
      ))}
      <div className="flex mt-4">
        <input
          type="text"
          value={text}
          onChange={onChangeText}
          className="border-2 border-gray-200 rounded p-2 mr-2 flex-grow"
        />
        <button
          onClick={onClickAdd}
          className="bg-blue-500 hover:bg-blue-700 btn"
        >
          追加
        </button>
      </div>
    </div>
  )
}

export default App
