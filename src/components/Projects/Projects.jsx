import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const PROJECTS_API_URL = 'https://projects.razs.dev/';

function Projects() {
    const [PROJECTS, setPROJECTS] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(PROJECTS_API_URL)
            .then(res => {
                if (!res.ok) throw new Error(`Request failed: ${res.status}`);
                return res.json();
            })
            .then(data => setPROJECTS(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    const CATEGORIES = [
        { id: "data", label: "Data", color: "#10b981" },
        { id: "web", label: "Web Dev", color: "#3b82f6" },
        { id: "odoo", label: "Odoo", color: "#a855f7" },
        { id: "software", label: "Software", color: "#f59e0b" },
    ];

    const [activeFilters, setActiveFilters] = useState(
        CATEGORIES.map(f => f.id)
    );

    function toggleFilter(filterId) {
        setActiveFilters(prev =>
            prev.includes(filterId)
                ? prev.filter(f => f !== filterId)
                : [...prev, filterId]
        );
    }

    const filteredProjects = PROJECTS
        .filter(p => activeFilters.includes(p.category))
        .sort((a, b) => {
            const priorityA = a.priority ?? 0;
            const priorityB = b.priority ?? 0;

            if (priorityA !== priorityB) {
                return priorityB - priorityA;
            }

            const categoryCompare = a.category.localeCompare(b.category);
            if (categoryCompare !== 0) {
                return categoryCompare;
            }

            return a.title.localeCompare(b.title);
        });

    if (loading) {
        return (
            <section id="projects" className={styles.projectsSection}>
                <h2>Portfolio</h2>
                <p className={styles.sectionIntro}>Loading projects...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className={styles.projectsSection}>
                <h2>Portfolio</h2>
                <p className={styles.sectionIntro}>
                    Couldn't load projects right now. Please try again later.
                </p>
            </section>
        );
    }

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2>Portfolio</h2>

            <p className={styles.sectionIntro}>
                {activeFilters.length === 0 ? (
                    <strong>No projects selected</strong>
                ) : (
                    <>
                        Showing <strong>{filteredProjects.length}</strong>{" "}
                        project{filteredProjects.length !== 1 && "s"} in{" "}
                        {activeFilters.map((id, index) => {
                            const filter = CATEGORIES.find(f => f.id === id);
                            return (
                                <span key={id}>
                                    <strong style={{ color: filter.color }}>
                                        {filter.label}
                                    </strong>
                                    {index < activeFilters.length - 1 && ", "}
                                </span>
                            );
                        })}
                    </>
                )}
            </p>

            {/* FILTERS */}
            <div className={styles.filters}>
                {CATEGORIES.map(filter => {
                    const isActive = activeFilters.includes(filter.id);

                    return (
                        <button
                            key={filter.id}
                            onClick={() => toggleFilter(filter.id)}
                            className={`${styles.filterBtn} ${isActive ? styles.active : ""
                                }`}
                            data-category={filter.id}
                            style={{
                                "--filter-color": filter.color,
                            }}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>

            {/* GRID */}
            <div className={styles.cardsGrid}>
                {activeFilters.length === 0
                    ? null
                    : filteredProjects.map(project => {
                        const categoryConfig = CATEGORIES.find(
                            c => c.id === project.category
                        );

                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                categoryLabel={categoryConfig?.label}
                                categoryColor={categoryConfig?.color}
                            />
                        );
                    })}
            </div>
        </section>
    );
}

export default Projects;