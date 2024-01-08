import React, { FC } from 'react'
import { Todo } from '../models/Todo'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export const TodoItem: FC<{
  todo: Todo
  onDelete: () => void
  onComplete: () => void
}> = ({ todo, onComplete, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded px-4 py-2 my-2">
      <p className="text-gray-800">{todo.title}</p>
      <div>
        <button
          onClick={onComplete}
          className="bg-green-500 hover:bg-green-700 btn"
        >
          完了
        </button>
        <IconButton
          aria-label="delete"
          onClick={onDelete}
          data-testid={`delete-button-${todo.id}`}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  )
}
