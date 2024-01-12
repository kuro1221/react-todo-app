import { useState, useEffect, ChangeEvent } from 'react'
import { TodoItem } from './components/TodoItem'
import { Todo } from './models/Todo'
import SearchAppBar from './components/SearchAppBar'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

import {
  fetchActiveTodos,
  addTodo,
  deleteTodo,
  completeTodo,
  changeTagToTodo,
} from './api/mockApi'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState<string>('')
  const [inputTextError, setInputTextError] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [initialTodos, setInitialTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchActiveTodos().then((data) => {
      setTodos(data)
      setInitialTodos(data)
    })
  }, [])

  useEffect(() => {
    const filteredTodos = initialTodos.filter((todo) =>
      todo.title.includes(searchText)
    )
    setTodos(filteredTodos)
  }, [searchText])

  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const onClickAdd = (text: string) => {
    try {
      if (text === '') {
        setInputTextError('Todoを入力してください')
        return
      }
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

  const onchangeTagToTodo = async (id: number, tag: string) => {
    try {
      console.log('onchangeTagToTodo')
      await changeTagToTodo(id, tag)
      await fetchActiveTodos().then((data) => setTodos(data))
    } catch (error) {
      console.log('Todoにタグ追加時エラー発生')
    }
  }

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setText(inputValue)

    if (inputValue === '') {
      setInputTextError('Todoを入力してください')
      return
    }

    if (inputValue.length > 20) {
      setInputTextError('Todoは20文字以内で入力してください')
      return
    }

    setInputTextError('')
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
    <>
      <SearchAppBar
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
      <div className="flex justify-center">
        <div className="App w-100 mb-8">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onComplete={() => onClickComplete(todo.id)}
              onDelete={() => onClickDelete(todo.id)}
              onchangeTagToTodo={(id, tag) => onchangeTagToTodo(id, tag)}
            />
          ))}
          <div className="flex mt-4">
            <TextField
              error={inputTextError ? true : false}
              id="filled-error-helper-text"
              label="New Todo"
              defaultValue="Hello World"
              helperText={inputTextError}
              variant="filled"
              onChange={onChangeText}
              value={text}
              style={{ marginRight: '10px' }}
            />
            <Button onClick={() => onClickAdd(text)} variant="outlined">
              追加
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
