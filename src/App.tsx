import React, { useState, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>([''])
  const [text, setText] = useState<string>('')

  const onClickAdd = () => {
    const newTodos = [...todos]
    newTodos.push(text)
    setTodos(newTodos)
    setText('')
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <p>{todo}</p>
      ))}
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default App
