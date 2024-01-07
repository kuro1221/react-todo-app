import { useState, useEffect, ChangeEvent } from 'react'
import { TodoItem } from './components/TodoItem'
import { Todo } from './models/Todo'
import { fetchTodos } from './api/mockApi'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data))
  }, [])

  const onClickAdd = () => {
    setTodos([...todos, new Todo(text, false, false)])
    setText('')
  }

  const onClickDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onComplete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="App p-6">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo.title}
          onComplete={() => onComplete(index)}
          onDelete={() => onClickDelete(index)}
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
