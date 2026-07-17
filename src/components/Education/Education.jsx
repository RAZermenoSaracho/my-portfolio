import styles from "./Education.module.css";

const educationData = [
    {
        id: "metana-web3-bootcamp",
        degree: "Full Stack & Web3 Solidity Bootcamp",
        institution: "Metana",
        meta: "In progress · Expected completion August 2026",
        link: "https://metana.io/web3-beginner-bootcamp/",
        description: []
    },
    {
        id: "software-engineering-hybridge",
        degree: "B.Sc. Software Engineering",
        institution: "Hybridge Education",
        meta: "In progress",
        link: "https://hybridge.education/ingenieria-en-software/",
        description: []
    },
    {
        id: "civil-engineering-unam",
        degree: "B.Sc. Civil Engineering",
        institution: "Universidad Nacional Autónoma de México (UNAM)",
        meta: "2017 – 2021",
        link: "https://www.ingenieria.unam.mx/programas_academicos/licenciatura/civil.php",
        description: []
    }
];

const certificationsData = [
    {
        id: "ibm-data-science",
        name: "IBM Data Science Professional Certificate",
        issuer: "IBM"
    },
    {
        id: "autodesk-revit",
        name: "Autodesk Revit Structure Certified Professional",
        issuer: "Autodesk"
    },
    {
        id: "ef-set-english",
        name: "EF SET English Proficiency (C2)",
        issuer: "EF SET"
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

            <h3 className={styles.subheading}>Certifications</h3>
            <div className={styles.certList}>
                {certificationsData.map(cert => (
                    <div key={cert.id} className={styles.certItem}>
                        <strong>{cert.name}</strong> — {cert.issuer}
                    </div>
                ))}
            </div>

            <h3 className={styles.subheading}>Languages</h3>
            <p className={styles.languages}>Spanish (Native) · English (C2 / Professional)</p>
        </section>
    );
}

export default Education;
