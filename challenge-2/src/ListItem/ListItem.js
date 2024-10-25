import React from 'react'

const ListItem = ({item}) => {
  return (
    <li>
        {JSON.stringify(item)} {/* This will actually display the text, without it nothing would show */}
    </li>
  )
}

export default ListItem