import styles from "./Skills.module.css";

function Skills({ skills }) {
    return (
        <section className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Skills & Technologies</h3>

            {skills.map(group => (
                <div key={group.category} className={styles.skillCategory}>
                    {group.category && <h4>{group.category}</h4>}
                    <div className={styles.skillGrid}>
                        {group.items.map(item => (
                            <span key={item} className={styles.skill}>{item}</span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Skills;
