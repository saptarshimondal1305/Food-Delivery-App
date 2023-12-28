import React from 'react'

function Input({id,label, ...props}) {
  return (
    <p className='control'>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} required {...props}></input>

    </p>
  )
}

export default Input
