import React, { FC } from 'react'

export const TodoItem: FC<{
  todo: string
  onDelete: () => void
  onComplete: () => void
}> = ({ todo, onComplete, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded px-4 py-2 my-2">
      <p className="text-gray-800">{todo}</p>
      <div>
        <button
          onClick={onComplete}
          className="bg-green-500 hover:bg-green-700 btn"
        >
          完了
        </button>
        <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 btn">
          削除
        </button>
      </div>
    </div>
  )
}
