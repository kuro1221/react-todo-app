import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

describe('Todo Add Test', () => {
  test('adds a new todo item when add button is clicked', () => {
    render(<App />)

    // テキストボックスと追加ボタンを取得
    const input = screen.getByRole('textbox')
    const addButton = screen.getByText('追加')

    // 新しいTodoのテキストを入力
    fireEvent.change(input, { target: { value: 'New Todo' } })

    // 追加ボタンをクリック
    fireEvent.click(addButton)

    // 新しいTodoがリストに表示されていることを確認
    expect(screen.getByText('New Todo')).toBeInTheDocument()
  })
})

describe('Todo Delete Test', () => {
  test('delete todo item when delete button is clicked', async () => {
    render(<App />)

    const deleteButton = await waitFor(() =>
      screen.getByTestId(`delete-button-1`)
    )

    fireEvent.click(deleteButton)

    await waitFor(() => {
      expect(screen.queryByText(`delete-button-1`)).toBeNull()
    })
  })
})
