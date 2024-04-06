import React from 'react'
import styles from "./Link.module.scss"
import Link from 'next/link';

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
    <div className={styles.link}>
        <Link href={data.href}>
            {data.title}
        </Link>
    </div>
  )
}

export default PLink