import styles from './Experience.module.css';

function Experience() {
    return (
        <section id="experience" className={styles.experienceSection}>
            <h2>Experience & Education</h2>

            <div className={styles.cardsGrid}>

                <div className={styles.experienceCard}>
                    <h3>Civil Engineer</h3>
                    <p className={styles.cardSubtitle}>Vive RAMZSA SA DE CV</p>
                    <p className={styles.cardMeta}>Project management · AutoCAD · Revit · Budgeting</p>
                    <p>
                        Led and coordinated construction projects, managing cross-functional teams,
                        cost control, technical documentation, and client communication.
                    </p>
                </div>

                <div className={styles.experienceCard}>
                    <h3>Functional and Technical Support Analyst (Odoo)</h3>
                    <p className={styles.cardSubtitle}>Odoo</p>
                    <p className={styles.cardMeta}>Python · Odoo Framework · Business Process Automation</p>
                    <p>
                        Supported clients during Odoo implementations by aligning business requirements
                        with the system, solving issues, and improving communication between users
                        and developers.
                    </p>
                    <p>
                        Built and customized Odoo modules, automated workflows, and implemented system
                        integrations. Collaborated directly with clients to analyze requirements,
                        design solutions, and ensure smooth deployments.
                    </p>
                </div>

                <div className={styles.experienceCard}>
                    <h3>Bachelor of Software Engineering</h3>
                    <p className={styles.cardSubtitle}>Hybridge University</p>
                    <p className={styles.cardMeta}>In progress</p>
                    <p>
                        Studying algorithms, system design, and web development while building real-world
                        projects and deepening technical foundations.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Experience;
