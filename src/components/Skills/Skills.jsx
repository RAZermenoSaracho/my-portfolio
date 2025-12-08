import styles from "./Skills.module.css";

function Skills() {
    return (
        <section className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Skills & Technologies</h3>

            <div className={styles.skillCategory}>
                <h4>Languages</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>Python</span>
                    <span className={styles.skill}>JavaScript</span>
                    <span className={styles.skill}>SQL</span>
                    <span className={styles.skill}>HTML</span>
                    <span className={styles.skill}>CSS</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Frameworks & Libraries</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>React</span>
                    <span className={styles.skill}>Odoo</span>
                    <span className={styles.skill}>Flask</span>
                    <span className={styles.skill}>Pandas</span>
                    <span className={styles.skill}>NumPy</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Tools & Technologies</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>Git</span>
                    <span className={styles.skill}>PostgreSQL</span>
                    <span className={styles.skill}>Linux</span>
                    <span className={styles.skill}>VS Code</span>
                    <span className={styles.skill}>APIs</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;
