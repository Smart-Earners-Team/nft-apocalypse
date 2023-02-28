import React from 'react'

type Props = {
    id: number
}
// the id is gotten from the url say localhost:8000/stake/34, id will be passed as 34
const stake = ({id}: Props) => {
  return (
    <div>
        <h1>Stake</h1>
        <span>Id: {id}</span>
    </div>

  )
}

export default stake