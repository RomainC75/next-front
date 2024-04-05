"use client"
import React, { useEffect, useRef } from 'react'

import styles from "./Video.module.scss"
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Video = () => {
    const para1 = useRef<HTMLParagraphElement | null>(null);
    const para2 = useRef<HTMLParagraphElement | null>(null);
    const slider = useRef<HTMLDivElement | null>(null);
    let xPercent = 0;
    let direction = -1;  


    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        requestAnimationFrame(animation)

        if(slider.current){
            gsap.to(slider.current, {
                scrollTrigger:{
                    trigger: document.documentElement,
                    start: 0,
                    end: window.innerHeight,
                    scrub: true,
                    onUpdate: e => direction = e.direction * -1
                },
                x: "-=300px"
            })
        }
    },[])

    const animation = () =>{
        if (xPercent<-100){
            xPercent=0
          }if (xPercent>0){
            xPercent=-100
          }
          console.log("=> xPercent : ", xPercent)
          gsap.set(para1.current, {xPercent: xPercent})
          gsap.set(para2.current, {xPercent: xPercent})
          xPercent += 0.05 * direction;
          requestAnimationFrame(animation)
    }

  return (
    <div className={styles.videoSection}>
        <video
        className={styles.video}
        src="/videos/waves.mp4"
        loop
        autoPlay
        muted
        ></video>
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={para1}>GWASH PRODUCTION-</p>
                <p ref={para2}>GWASH PRODUCTION-</p>
            </div>
        </div>
    </div>
  )
}

export default Video