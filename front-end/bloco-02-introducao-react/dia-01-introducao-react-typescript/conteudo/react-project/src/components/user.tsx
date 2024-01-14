import React from 'react'

export default function User (): JSX.Element {
  const user = {
    name: 'Leandro',
    lastname: 'Camargo'
  }

  return <span>{`${user.name} ${user.lastname}`}</span>
}
