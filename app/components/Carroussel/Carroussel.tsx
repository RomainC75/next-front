"use client";
import Image from "next/image";
import styles from "./Carroussel.module.scss";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/app/hooks/useDimension";

interface IColumn{
  images: string[];
  y: MotionValue<number> | number
}

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];
export default function Carroussel() {
  const {height, width} = useDimension()

  const container = useRef(null);
  // get scroll values from the "container"
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height*2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height*3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height*1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height*3]);

  useEffect(() => {
    // smooth scroll
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [scrollYProgress]);

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images, y = 0 }: IColumn) => {
  return (
    // motion : DOM primitives optimised for 60fps animation
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${src}`} fill alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
};
