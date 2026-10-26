import styles from "./Footer.module.css";
import { shortName } from "../../utils/emphasis";

function Footer({ profile }) {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} {shortName(profile?.name)} · Built with data & code.</p>
        </footer>
    );
}

export default Footer;
