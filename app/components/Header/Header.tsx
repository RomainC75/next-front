"use client"
import React, { useState } from 'react'
import styles from "./Header.module.scss"
import Nav from './Nav/Nav';
import { AnimatePresence } from 'framer-motion';


const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
        <div className={styles.button} onClick={()=>setIsActive(!isActive)}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive: ""}`}></div>
        </div>
        {/* make the "exit animation" possible ... because it waits before make it disappear ?  */}
        <AnimatePresence mode="wait">
            {isActive && <Nav/>}
        </AnimatePresence>
    </>
  )
}

export default Header