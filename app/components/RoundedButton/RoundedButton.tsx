import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './RoundedButton.module.scss';
import gsap from 'gsap';
import Magnetic from '../../common/Magnetic';

export default function RoundedButton({children, backgroundColor="#455CE9", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;
  useEffect( () => {
    if(timeline.current ){
        timeline.current = gsap.timeline({paused: true})
        timeline.current
          .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
          .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
    }
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    if(timeline.current){
        timeline.current.tweenFromTo('enter', 'exit');
    }
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
        if(timeline.current){
            timeline.current.play();
        }
    }, 300)
  }

  return (
    <Magnetic>
      <div className={styles.roundedButton} style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}