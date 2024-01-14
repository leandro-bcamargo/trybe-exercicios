import React from 'react'
import User from './user'

function Header (): JSX.Element {
  return (
    <header>
      <h1>
        Olá <User />
      </h1>
    </header>
  )
}

export default Header
