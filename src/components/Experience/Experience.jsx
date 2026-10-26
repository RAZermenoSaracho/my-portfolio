import styles from "./Experience.module.css";

function Experience({ experience }) {
    return (
        <section id="experience" className={styles.experienceSection}>
            <h2>Experience</h2>

            <div className={styles.cardsGrid}>
                {experience.map(item => (
                    <div key={item.id} className={styles.experienceCard}>
                        <h3>{item.role}</h3>

                        <p className={styles.cardSubtitle}>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.externalLink}
                                >
                                    {item.company}
                                </a>
                            ) : (
                                item.company
                            )}
                        </p>

                        <p className={styles.cardMeta}>{item.meta}</p>

                        {item.description.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
