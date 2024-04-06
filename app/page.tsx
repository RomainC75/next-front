"use client"
import Carroussel from "./components/Carroussel/Carroussel"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Video from "./components/video/Video"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <>
      <Header/>
    <section className='mainSection'>
      <Video/>
      <Carroussel/>
      <Contact/>
      
    </section>
    </>
  )
}
