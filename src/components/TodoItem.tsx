import React, { FC } from 'react'

export const TodoItem: FC<{ todo: string; onDelete: () => void }> = ({
  todo,
  onDelete,
}) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded px-4 py-2 my-2">
      <p className="text-gray-800">{todo}</p>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        削除
      </button>
    </div>
  )
}
