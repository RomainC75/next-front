"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import styles from "./Header.module.scss"
import Nav from './Nav/Nav';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const burger = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(burger.current,{
            scrollTrigger:{
                trigger: document.documentElement,
                start: 0 ,
                end: "200px",
                // animat scal of the burger
                onLeave: ()=>{ gsap.to(burger.current,{ scale: 1, duration: 0.25, ease: "power1.out" })},
                onEnterBack: ()=>{ gsap.to(burger.current,{ scale:0, duration: 0.25, ease: "power1.out"  })}
            }

        })
    },[])

  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <div className={styles.copyright}>C</div>
            <div className={styles.name}>
                <p className={styles.codeBy}>Code by</p>
                <p className={styles.romain}>Romain</p>
                <p className={styles.chenard}>Chenard</p>
            </div>
        </div>

        <div className={styles.nav}>
            <div className={styles.el}>
                <p>Work</p>
                <div className={styles.indicator}></div>
            </div>
            <div className={styles.el}>
                <p>About</p>
                <div className={styles.indicator}></div>
            </div>
            <div className={styles.el}>
                <p>Contact</p>
                <div className={styles.indicator}></div>
            </div>
        </div>


        <div ref={burger} className={styles.button} onClick={()=>setIsActive(!isActive)}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive: ""}`}></div>
        </div>
        {/* make the "exit animation" possible ... because it waits before make it disappear ?  */}
        <AnimatePresence mode="wait">
            {isActive && <Nav/>}
        </AnimatePresence>

    </div>
  )
}

export default Header