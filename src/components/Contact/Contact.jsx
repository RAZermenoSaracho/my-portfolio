import styles from './Contact.module.css';

function Contact({ links }) {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2>Contact</h2>

            <p>
                Feel free to reach out if you're hiring for a remote role, looking to collaborate,
                or want more details about my experience.
            </p>

            <ul className={styles.contactList}>
                {[['LinkedIn', links.linkedin], ['GitHub', links.github]].map(([label, href]) => href && (
                    <li key={label}>
                        <strong>{label}:</strong>{' '}
                        <a href={href} target="_blank" rel="noreferrer">
                            {href.replace(/^https?:\/\//, '')}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Contact;
