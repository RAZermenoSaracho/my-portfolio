import styles from "./Education.module.css";

function Education({ education, certifications, languages }) {
    return (
        <section id="education" className={styles.experienceSection}>
            <h2>Education</h2>

            <div className={styles.cardsGrid}>
                {education.map(item => (
                    <div key={item.id} className={styles.experienceCard}>
                        <h3>{item.degree}</h3>

                        <p className={styles.cardSubtitle}>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.externalLink}
                                >
                                    {item.institution}
                                </a>
                            ) : (
                                item.institution
                            )}
                        </p>

                        <p className={styles.cardMeta}>{item.meta}</p>

                        {item.description.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                ))}
            </div>

            <h3 className={styles.subheading}>Certifications</h3>
            <div className={styles.certList}>
                {certifications.map(cert => (
                    <div key={cert.id} className={styles.certItem}>
                        <strong>{cert.name}</strong> — {cert.issuer}
                    </div>
                ))}
            </div>

            <h3 className={styles.subheading}>Languages</h3>
            <p className={styles.languages}>
                {languages.map(l => `${l.name} (${l.level})`).join(' · ')}
            </p>
        </section>
    );
}

export default Education;
