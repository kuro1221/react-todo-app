import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>(['test'])

  const addTodo = () => {}

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <p>{todo}</p>
      ))}
      <button onClick={addTodo}>追加</button>
    </div>
  )
}

export default App
