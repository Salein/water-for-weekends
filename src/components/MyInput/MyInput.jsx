import React from 'react'
import './myInput.css'


const MyInput = (props) => {
  return (
    <input className='neon-input' type='number' min='0' {...props} />
  )
}

export default MyInput