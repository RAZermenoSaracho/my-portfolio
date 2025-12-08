import styles from './About.module.css';
import Skills from '../Skills/Skills';

function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2>About Me</h2>

            <p className={styles.aboutText}>
                I'm Ricardo Zermeño, a software engineer with a background in civil engineering.
                I specialize in building technical solutions across data, automation, and web
                development. I have hands-on experience delivering real-world projects using
                Python, SQL, Odoo, and modern web technologies.
            </p>

            <p className={styles.aboutText}>
                I’m especially interested in the intersection of <strong>data</strong> and{' '}
                <strong>web development</strong>: building tools that automate workflows, generate
                meaningful insights, and help businesses make better decisions.
            </p>
            <Skills />
        </section>
    );
}

export default About;
