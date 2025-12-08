import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>

                <p className={styles.heroTagline}>Civil Engineer · Software Engineer</p>

                <h1 className={styles.heroTitle}>
                    I build solutions in{" "}
                    <span className={styles.highlight}>data</span> and{" "}
                    <span className={styles.highlight}>web development</span>.
                </h1>

                <p className={styles.heroSubtitle}>
                    With a background in civil engineering and hands-on experience in software development,
                    I bridge analytical thinking with technical problem-solving. I build data-driven systems,
                    automation tools, and modern web applications. Open to remote roles where I can deliver
                    high-impact engineering work.
                </p>

                <div className={styles.heroActions}>
                    <a className={`${styles.btn} ${styles.primary}`} href="#projects">
                        View Portfolio
                    </a>

                    <a className={`${styles.btn} ${styles.secondary}`} href="#experience">
                        View Resume
                    </a>

                    <a
                        className={`${styles.btn} ${styles.ghost}`}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                    >
                        Download CV (coming soon)
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
