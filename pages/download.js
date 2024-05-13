import styles from '../styles/download.module.css'

function download() {
    return (
        <div className={styles.body}>
        <h1 className={styles.h1}>Download offbrand spotify</h1>
        <div className={styles.downloadgrid}>
            <div className={styles.platformbox}>
                <h2>Windows</h2>
                <a href="https://playmusichtml.web.app/offbrand.spotify.exe" className={styles.downloadbutton}>Download</a>
            </div>
            <div className={styles.platformbox}>
                <h2>Web (Online)</h2>
                <a href="https://playmusichtml.web.app/" className={styles.downloadbutton}>Visit</a>
            </div>
            <div className={styles.platformbox}>
              <h2>iOS (Web Clip)</h2>
              <a href="https://playmusichtml.web.app/offbrand.spotify.mobileconfig" className={styles.downloadbutton}>Visit</a>
            </div>
        </div>
        </div>
)
}
export default download;