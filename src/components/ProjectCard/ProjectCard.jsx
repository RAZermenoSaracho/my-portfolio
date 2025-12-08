import { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";

const LANGUAGE_COLORS = {
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Shell: "#89e051",
    TypeScript: "#2b7489",
    JupyterNotebook: "#DA5B0B",
    Markdown: "#083fa1",
    default: "#999999"
};

function ProjectCard({ project }) {
    const { category, github } = project;

    // Badge label
    let badgeText = "";
    if (category === "data") badgeText = "DATA";
    else if (category === "web") badgeText = "WEB DEV";
    else if (category === "odoo") badgeText = "ODOO";
    else if (category === "software") badgeText = "SOFTWARE";

    const [languages, setLanguages] = useState(null);

    useEffect(() => {
        async function fetchLanguages() {
            if (!github) return;

            const apiUrl =
                github.replace("https://github.com", "https://api.github.com/repos") +
                "/languages";

            try {
                const res = await fetch(apiUrl);
                if (!res.ok) return;

                const data = await res.json();

                const total = Object.values(data).reduce((a, b) => a + b, 0);

                const percentData = Object.entries(data)
                    .map(([lang, bytes]) => ({
                        lang,
                        percent: ((bytes / total) * 100).toFixed(1),
                    }))
                    .sort((a, b) => b.percent - a.percent);

                setLanguages(percentData);
            } catch {
                setLanguages(null);
            }
        }

        fetchLanguages();
    }, [github]);

    return (
        <div className={styles.card}>
            <div className={styles.cardBadgeWrapper}>
                <span
                    className={`${styles.badge} 
                    ${category === "web" ? styles.badgeWeb : ""} 
                    ${category === "data" ? styles.badgeData : ""} 
                    ${category === "odoo" ? styles.badgeOdoo : ""} 
                    ${category === "software" ? styles.badgeSoftware : ""}`}
                >
                    {badgeText}
                </span>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>

            {project.subtitle && <p className={styles.cardSubtitle}>{project.subtitle}</p>}

            <p className={styles.cardMeta}>{project.tech}</p>
            <p className={styles.description}>{project.description}</p>

            {/* Unified GitHub Language Bar */}
            {languages && (
                <div className={styles.langSection}>
                    <div className={styles.langBarUnified}>
                        {languages.map(({ lang, percent }) => (
                            <div
                                key={lang}
                                className={styles.langBarSegment}
                                style={{
                                    width: `${percent}%`,
                                    backgroundColor: LANGUAGE_COLORS[lang] || LANGUAGE_COLORS.default,
                                }}
                            ></div>
                        ))}
                    </div>

                    <div className={styles.langLegend}>
                        {languages.map(({ lang, percent }) => (
                            <div key={lang} className={styles.langLegendRow}>
                                <span
                                    className={styles.langDot}
                                    style={{
                                        backgroundColor:
                                            LANGUAGE_COLORS[lang] || LANGUAGE_COLORS.default,
                                    }}
                                ></span>
                                <span className={styles.langLegendLabel}>{lang}</span>
                                <span className={styles.langLegendPercent}>{percent}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className={styles.cardLinks}>
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                        View on GitHub
                    </a>
                )}

                {project.appstore && (
                    <>
                        {" · "}
                        <a href={project.appstore} target="_blank" rel="noreferrer">
                            App Store
                        </a>
                    </>
                )}

                {project.demo && (
                    <>
                        {" · "}
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
