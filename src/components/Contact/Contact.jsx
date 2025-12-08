import styles from './Contact.module.css';

function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2>Contact</h2>

            <p>
                Feel free to reach out if you're hiring for a remote role, looking to collaborate,
                or want more details about my experience.
            </p>

            <ul className={styles.contactList}>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:ricardozs_96@hotmail.com">ricardozs_96@hotmail.com</a>
                </li>
                <li>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                        href="https://www.linkedin.com/in/ricardo-zermeno/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/ricardo-zermeno/
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong>{' '}
                    <a
                        href="https://github.com/RAZermenoSaracho"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/RAZermenoSaracho
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
