import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const Button:FC<Props> = ({children}) => {
  return (
    <button style={{
        padding: '1em'
    }} >{children}</button>
  )
}

export default Button