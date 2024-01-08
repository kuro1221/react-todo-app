import React, { FC } from 'react'
import { Todo } from '../models/Todo'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Chip from '@mui/material/Chip'
import { Button } from '@mui/material'
import { TagSelection } from './TagSelection'

export const TodoItem: FC<{
  todo: Todo
  onDelete: () => void
  onComplete: () => void
  onchangeTagToTodo: (id: number, tag: string) => void
}> = ({ todo, onComplete, onDelete, onchangeTagToTodo }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded px-4 py-2 my-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-800 text-lg">{todo.title}</p>
          <div className="flex">
            {todo.tag && (
              <Chip
                label={todo.tag}
                color="primary"
                size="small"
                className="mr-2"
                variant="outlined"
              />
            )}
            <TagSelection
              todoId={todo.id}
              onchangeTagToTodo={(id, tag) => onchangeTagToTodo(id, tag)}
            />
          </div>
        </div>
        <div>
          <IconButton aria-label="complete" onClick={onComplete}>
            <CheckCircleIcon color="success" />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={onDelete}
            data-testid={`delete-button-${todo.id}`}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
