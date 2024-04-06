"use client"
import React, { useState } from 'react'
import styles from "./Header.module.scss"
import Nav from './Nav/Nav';


const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
        <div className={styles.button} onClick={()=>setIsActive(!isActive)}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive: ""}`}></div>
        </div>
        {isActive && <Nav/>}
    </>
  )
}

export default Header