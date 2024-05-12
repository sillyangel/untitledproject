import Link from "next/link";
import styles from "../styles/footer.module.css";

function Footer() {
    return (
        <footer className={styles.footers}>
            <Link href="download/">Download</Link>
            <Link href="privacypolicy/">Privacy Policy</Link>
            <Link href="https://sillyangel3.notion.site/offbrand-spotify-roadmap-c30b0eddf28143e3847443c5294d9271?pvs=4">Roadmap</Link>
        </footer>
    );
}

export default Footer;