import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

describe('Todo Add Test', () => {
  test('adds a new todo item when add button is clicked', async () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'New Todo' } })

    fireEvent.click(addButton)

    await waitFor(() => {
      expect(screen.getByText('New Todo')).toBeInTheDocument()
    })
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
describe('onChangeText Test', () => {
  test('sets the input text error when empty input is provided', () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '一時的に入力' } })
    fireEvent.change(input, { target: { value: '' } })

    expect(screen.getByText('Todoを入力してください')).toBeInTheDocument()
  })

  test('sets the input text error when input exceeds 20 characters', () => {
    render(<App />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { value: 'This is a very long todo item' },
    })

    expect(
      screen.getByText('Todoは20文字以内で入力してください')
    ).toBeInTheDocument()
  })
})
