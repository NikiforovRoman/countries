import React from 'react'
import s from './myButton.module.scss'
import { useNavigate } from 'react-router-dom';

const MyButton = ({children}) => {
  const goBack = useNavigate();
  return (
    <button onClick={() => goBack(-1)} className={s.button}>
      {children}
    </button>
  )
}

export default MyButton;
