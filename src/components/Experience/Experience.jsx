import styles from "./Experience.module.css";

const experienceData = [
    {
        id: "capital-one",
        role: "Software Engineer",
        company: "Capital One",
        link: null,
        meta: "2026 – Present · Backend · APIs · Cloud Engineering · Fintech",
        description: [
            "Develop backend software in a fintech environment, contributing to APIs, financial systems, and cloud engineering.",
            "Collaborate on delivering production-grade software with modern practices: testing, CI/CD, code reviews, Agile.",
            "Apply backend, database, API, and systems-thinking expertise to build reliable and scalable financial software."
        ]
    },
    {
        id: "odoo-support",
        role: "Functional & Technical Support Engineer",
        company: "Odoo",
        link: "https://www.odoo.com",
        meta: "12/2023 – 04/2026 · Python · PostgreSQL · XML · QWeb",
        description: [
            "Developed and customized ERP solutions using Python, PostgreSQL, XML, and QWeb.",
            "Diagnosed and resolved complex production issues through SQL analysis, log investigation, and business process validation.",
            "Collaborated with developers and consultants to deliver scalable solutions for international clients."
        ]
    },
    {
        id: "vive-ramzsa",
        role: "Project Manager",
        company: "VIVE RAMZSA SA DE CV",
        link: null,
        meta: "2021 – 2023 · Construction & Real Estate · Team Leadership",
        description: [
            "Managed construction and real estate projects: budgeting, scheduling, execution, and stakeholder coordination.",
            "Led multidisciplinary teams of up to 20 people (engineering, architecture, contractors, suppliers)."
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
