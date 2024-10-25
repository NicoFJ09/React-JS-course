import React from 'react'
import {Link} from 'react-router-dom'


const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Post not found</h2>
        <p>Well, that sucks.</p>
        <p>
            <Link to="/">Back to home</Link>
        </p>
    </main>
  )
}

export default Missing