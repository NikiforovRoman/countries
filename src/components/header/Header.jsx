import React, { useEffect, useState } from 'react'
import s from './header.module.scss'
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import Container from '../container/Container'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark': 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <h1 className={s.header__title}><NavLink className={s.header__link} to='/'>Where in the world?</NavLink></h1>
          <div className={s.header__switcher} onClick={toggleTheme}>
            {theme === 'light' 
              ?
              <IoMoonOutline size={14} />
              :
              <IoMoon size={14}/>
            }
            <span style={{marginLeft: '0.5rem'}}>{theme} mode</span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
