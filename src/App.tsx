import React, { useState, ChangeEvent } from 'react'
import { TodoItem } from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [text, setText] = useState<string>('')

  const onClickAdd = () => {
    setTodos([...todos, text])
    setText('')
  }

  const onClickDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="App p-6">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          追加
        </button>
      </div>
    </div>
  )
}

export default App
