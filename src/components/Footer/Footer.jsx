import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Ricardo Zermeño · Built with data & code.</p>
        </footer>
    );
}

export default Footer;
