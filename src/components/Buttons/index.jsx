import React from 'react'
import './styles.css'

const Buttons = (props) => {
  return (
    <div>
    <button className='btn'>{props.text}</button>
    </div>
  )
}

export default Buttons