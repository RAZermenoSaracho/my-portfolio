import styles from "./Education.module.css";

const educationData = [
    {
        id: "civil-engineering-unam",
        degree: "Bachelor of Civil Engineering",
        institution: "National Autonomous University of Mexico (UNAM)",
        meta: "Faculty of Engineering · Graduated",
        link: "https://www.ingenieria.unam.mx/programas_academicos/licenciatura/civil.php",
        description: [
            "Formal education in structural engineering, construction management, hydraulics, and project planning.",
            "Developed strong analytical thinking, problem-solving skills, and a solid foundation in engineering mathematics and physics.",
            "Participated in academic projects focused on real-world infrastructure and construction challenges."
        ]
    },
    {
        id: "software-engineering-hybridge",
        degree: "Bachelor of Software Engineering",
        institution: "Hybridge Education",
        meta: "In progress",
        link: "https://hybridge.education/ingenieria-en-software/",
        description: [
            "Focused on software architecture, algorithms, data structures, and full-stack web development.",
            "Hands-on experience building real-world applications using modern JavaScript frameworks and backend technologies.",
            "Strong emphasis on problem-solving, clean code, and industry best practices."
        ]
    },
    {
        id: "metana-web3-bootcamp",
        degree: "Fullstack Web3 Beginner Bootcamp",
        institution: "Metana",
        meta: "Completed",
        link: "https://metana.io/web3-beginner-bootcamp/",
        description: [
            "Intensive bootcamp covering Web3 fundamentals, blockchain concepts, and decentralized application development.",
            "Built full-stack projects integrating smart contracts, frontend interfaces, and Web3 tooling.",
            "Gained practical experience with modern JavaScript, blockchain workflows, and emerging Web3 technologies."
        ]
    }
];

function Education() {
    return (
        <section id="education" className={styles.experienceSection}>
            <h2>Education</h2>

            <div className={styles.cardsGrid}>
                {educationData.map(item => (
                    <div key={item.id} className={styles.experienceCard}>
                        <h3>{item.degree}</h3>

                        <p className={styles.cardSubtitle}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.externalLink}
                            >
                                {item.institution}
                            </a>
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

export default Education;
