import React from 'react'
import Row from '../Row/Row'
const Table = ({items}) => {
  return (
    <div className = "TableContainer">
    <table>
        <tbody>
            {items.map((item) => (
                <Row key={item.id} item = {item}>
                </Row>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Table