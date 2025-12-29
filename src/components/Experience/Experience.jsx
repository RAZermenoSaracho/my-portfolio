import styles from "./Experience.module.css";

const experienceData = [
    {
        id: "vive-ramzsa",
        role: "Civil Engineer",
        company: "Vive RAMZSA SA DE CV",
        link: null,
        meta: "Project management · AutoCAD · Revit · Budgeting",
        description: [
            "Led and coordinated construction projects, managing cross-functional teams, cost control, technical documentation, and client communication.",
            "Worked closely with architects, contractors, and stakeholders to ensure project quality, timelines, and budgets were met.",
            "Applied engineering principles to solve on-site construction challenges and optimize execution processes."
        ]
    },
    {
        id: "odoo-support",
        role: "Functional and Technical Support Analyst",
        company: "Odoo",
        link: "https://www.odoo.com",
        meta: "Python · Odoo Framework · Business Process Automation · ERP Systems",
        description: [
            "Provided functional and technical support during Odoo implementations, aligning client business processes with ERP solutions.",
            "Developed and customized Odoo modules, automated workflows, and resolved complex system issues using Python and the Odoo framework.",
            "Collaborated directly with clients and internal teams to analyze requirements, propose solutions, and ensure successful deployments."
        ]
    }
];

function Experience() {
    return (
        <section id="experience" className={styles.experienceSection}>
            <h2>Experience</h2>

            <div className={styles.cardsGrid}>
                {experienceData.map(item => (
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
