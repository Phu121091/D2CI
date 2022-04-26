import React from 'react'
import './styles.css';

const Inputs = (props) => {
  return (
    <div className='divip'>
    <input className='ipt' placeholder={props.text} label={props.text}></input>
    </div>
  )
}

export default Inputs