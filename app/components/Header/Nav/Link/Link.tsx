import React from 'react'
import styles from "./Link.module.scss"
import Link from 'next/link';
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { slide } from '../../anime';

export interface ILink{
    title: string;
    href: string;
    index ?: number
}

interface IPLinkProp {
    data: ILink;
    key: string
}

const PLink = ({data}: IPLinkProp) => {
  return (
    <motion.div 
        // custom : pass a value like a prop 
        custom={data.index}
        variants={slide} 
        animate="enter" 
        exit="exit" 
        initial="initial" 
        className={styles.link}
        >
        <Link href={data.href}>
            {data.title}
        </Link>
    </motion.div>
  )
}

export default PLink