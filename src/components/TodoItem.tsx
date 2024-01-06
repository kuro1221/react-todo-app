import React, { useState, ChangeEvent, FC } from 'react'

export const TodoItem = ({
  todo,
  onDelete,
}: {
  todo: string
  onDelete: () => void
}) => {
  return (
    <div>
      <p>{todo}</p>
      <button onClick={onDelete}>削除</button>
    </div>
  )
}
