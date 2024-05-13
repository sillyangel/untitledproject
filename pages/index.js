import styles from '../styles/home.module.css'
import Sidebarmen from '../components/sidebarmen'
import Audiocontrols from '../components/audiocontrols'
import Footer from '../components/footer'
import Songselector from "../components/songselector";

function Home() {
  return (
    <main className={styles.body}>
      <Sidebarmen/>
      <Songselector/>
      <Footer/>
      <Audiocontrols/>
    </main>
  )
}

export default Home
