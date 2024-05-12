import Link from "next/link";
import styles from "../styles/footer.module.css";

function Footer() {
    return (
        <footer style={styles.footer}>
            <Link href="download/"><a>Download</a></Link>
            <Link href="privacypolicy/"><a>Privacy Policy</a></Link>
            <Link href="https://sillyangel3.notion.site/offbrand-spotify-roadmap-c30b0eddf28143e3847443c5294d9271?pvs=4"><a>Roadmap</a></Link>
        </footer>
    )
}

export default Footer;