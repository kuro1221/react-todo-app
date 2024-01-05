import React, { FC } from 'react'

type props = {
  onClick: () => void
  title: string
}

export const Button: FC = (props) => {
  return <button>test</button>
  //   const { onClick, title } = props
  //   return <button onClick={onclick}>{title}</button>
}
