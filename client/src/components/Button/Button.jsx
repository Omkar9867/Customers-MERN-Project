import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <>
    <div className='button-container'>
      <button className={props.css} onClick={() => {window.location.href=`${props.go}`}}>
        {props.title}
      </button>
    </div>
    </>
  )
}

export default Button