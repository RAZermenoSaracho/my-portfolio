import styles from './About.module.css';
import Skills from '../Skills/Skills';

function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2>About Me</h2>

            <p className={styles.aboutText}>
                Software Engineer with experience in backend financial systems, REST APIs, and
                quantitative technologies. Currently at Capital One Mexico. Previous experience at
                Odoo (functional and technical support) and a background in civil engineering
                project management. Stack: Python, PostgreSQL, JavaScript/TypeScript, React,
                Solidity, Foundry.
            </p>

            <p className={styles.aboutText}>
                Particular interest in the intersection of <strong>software engineering</strong>,{' '}
                <strong>financial markets</strong>, quantitative research, and{' '}
                <strong>DeFi</strong>.
            </p>
            <Skills />
        </section>
    );
}

export default About;
