import Carroussel from "./components/Carroussel/Carroussel"
import Video from "./components/video/Video"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <section className='mainSection'>
      <Video/>
      <Carroussel/>
      <div className={styles.spacer}></div>
    </section>
  )
}
