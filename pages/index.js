import styles from '../styles/home.module.css'
import Sidebarmen from '../components/sidebarmen'
import Audiocontrols from '../components/audiocontrols'

function Home() {
  return (
    <main className={styles.body}>
      <Sidebarmen/>
      <Audiocontrols/>
    </main>
  )
}

export default Home
