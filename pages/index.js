import styles from '../styles/home.module.css'
import Sidebarmen from '../components/sidebarmen'
import Audiocontrols from '../components/audiocontrols'
import Footer from '../components/footer'

function Home() {
  return (
    <main className={styles.body}>
      <Sidebarmen/>
      <Footer/>
      <Audiocontrols/>
    </main>
  )
}

export default Home
