import styles from './About.module.css';
import Skills from '../Skills/Skills';
import emphasize from '../../utils/emphasis';

function About({ profile, skills }) {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2>About Me</h2>

            {profile.bio.map((text, i) => (
                <p key={i} className={styles.aboutText}>
                    {emphasize(text, ({ children }) => <strong>{children}</strong>)}
                </p>
            ))}
            <Skills skills={skills} />
        </section>
    );
}

export default About;
