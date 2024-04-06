import React from 'react'
import styles from "./Nav.module.scss"
import PLink, { ILink } from './Link/Link'
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { menuSlide, slide } from '../anime';

const Nav = () => {

    const navItems: ILink[] = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Work",
            href: "/work"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ]
  return (
    // motion : put the animation data in the variants linked file .
    <motion.div 
        variants={menuSlide} 
        animate="enter" 
        exit="exit" 
        initial="initial" 
        className={styles.menu}
    >
        <div className={styles.body}>
            <div className={styles.nav}>
                <div className={styles.header}>
                    <p>Navigation</p>
                </div>
                    {
                        navItems.map((item, index)=>{
                            return <PLink data={{...item, index}} key={`${index}-${item}`}/>
                        })
                    }
            </div>
            <div className={styles.footer}>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Nav