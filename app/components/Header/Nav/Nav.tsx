import React from 'react'
import styles from "./Nav.module.scss"
import PLink, { ILink } from './Link/Link'

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
    <div className={styles.menu}>
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
        </div>
    </div>
  )
}

export default Nav