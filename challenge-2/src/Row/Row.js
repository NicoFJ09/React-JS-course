import React from 'react'
import Cell from '../Cell/Cell'
const Row = ({item}) => {
  return (
    <tr>
        {Object.values(item).map((value, index) => {
            return(
            <Cell key={index} cellData={JSON.stringify(value)} />
        )
        })}
    </tr>
  )
}

export default Row