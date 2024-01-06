import React, { useState, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoItem } from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [text, setText] = useState<string>('')

  const onClickAdd = () => {
    const newTodos = [...todos]
    newTodos.push(text)
    setTodos(newTodos)
    setText('')
  }

  const onClickDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onClickDelete(index)}
        />
      ))}
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default App
