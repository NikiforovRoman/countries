import React from 'react'
import s from './myInput.module.scss'

const MyInput = (props) => {
  return (
    <input className={s.input} {...props}/>
  )
}

export default MyInput
