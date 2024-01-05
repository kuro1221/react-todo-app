import React, { useState, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'

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
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <div>
          <p>{todo}</p>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </div>
      ))}
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default App
