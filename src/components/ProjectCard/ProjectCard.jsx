import LanguageBreakdown from "../LanguageBreakdown/LanguageBreakdown";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project, categoryColor, categoryLabel }) {
    const { category, github } = project;

    return (
        <div className={styles.card}>
            {/* CATEGORY BADGE */}
            <div className={styles.cardBadgeWrapper}>
                <span
                    className={styles.badge}
                    style={{ "--badge-color": categoryColor }}
                >
                    {categoryLabel?.toUpperCase() || category.toUpperCase()}
                </span>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>

            {project.subtitle && (
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
            )}

            <p className={styles.cardMeta}>{project.tech}</p>
            <p className={styles.description}>{project.description}</p>

            {/* GitHub Languages */}
            <LanguageBreakdown repos={[github]} />

            {/* LINKS */}
            <div className={styles.cardLinks}>
                {[
                    project.github && (
                        <a
                            key="github"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on GitHub
                        </a>
                    ),
                    project.appstore && (
                        <a
                            key="appstore"
                            href={project.appstore}
                            target="_blank"
                            rel="noreferrer"
                        >
                            App Store
                        </a>
                    ),
                    project.demo && (
                        <a
                            key="demo"
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    ),
                ]
                    .filter(Boolean)
                    .reduce((acc, curr, index) => {
                        if (index > 0) acc.push(" · ");
                        acc.push(curr);
                        return acc;
                    }, [])}
            </div>
        </div>
    );
}

export default ProjectCard;
