import React from 'react'

type Props = {
    id: number
}

const farm = ({id}: Props) => {
  return (
    <div>
        <h1>Stakings</h1>
        <span>Id: {id}</span>
    </div>
  )
}

export default farm