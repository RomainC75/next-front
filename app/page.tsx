import Carroussel from "./components/Carroussel/Carroussel"
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
      <div className={styles.spacer}></div>
    </section>
    </>
  )
}
