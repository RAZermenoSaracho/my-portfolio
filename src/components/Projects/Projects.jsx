import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    const PROJECTS = [
        {
            id: 'web-quantlab',
            category: 'software',
            priority: 100,
            title: 'QuantLab',
            subtitle: 'Algorithmic Trading Strategy Lab',
            tech: 'React · TypeScript · Node.js · Express · Python · PostgreSQL',
            description:
                'Full-stack platform for building, backtesting, and optimizing algorithmic trading strategies. Features a deterministic Python trading engine, historical backtesting, paper trading simulation, and a parameter optimizer that automatically evaluates multiple strategy configurations.',
            github: 'https://github.com/RAZermenoSaracho/quantlab'
        },
        {
            id: 'web-real-value-marketing',
            category: 'web',
            priority: 95,
            title: 'Real Value Marketing',
            subtitle: 'Lead Generation Website with CRM Integration',
            tech: 'React · TypeScript · Vite · Node.js · Express · Odoo CRM · Vercel · Railway',
            description:
                'A high-conversion marketing website designed for B2B lead generation. Includes a custom Book a Call flow connected to Odoo CRM via a secure backend API.',
            github: 'https://github.com/rvazquezme-creator/real-value-marketing',
            demo: 'https://www.realvaluemarketing.com/'
        },
        {
            id: 'web-react-min-handbook',
            category: 'web',
            priority: 90,
            title: 'React Minimal Handbook',
            subtitle: 'Interactive Guide to Core React Concepts',
            tech: 'React · TypeScript · Vite · Tailwind · WebSockets · REST APIs',
            description:
                'Interactive learning application demonstrating React concepts such as components, hooks, Context API, and real-time data updates.',
            github: 'https://github.com/RAZermenoSaracho/react-min-handbook',
            demo: 'https://react-min-handbook.vercel.app/'
        },
        {
            id: 'spacex-falcon9-landing-prediction',
            category: 'data',
            priority: 85,
            title: 'SpaceX Falcon 9 Landing Prediction',
            subtitle: 'End-to-end Data Science project with live interactive dashboard',
            tech: 'Python · Pandas · SQL · Scikit-learn · Plotly · Dash',
            description:
                'Data science project predicting Falcon 9 landing success using API data, machine learning models, and a live interactive dashboard.',
            demo: 'https://spacex-falcon9-landing-prediction-zve7.onrender.com/',
            github: 'https://github.com/RAZermenoSaracho/spacex-falcon9-landing-prediction'
        },
        {
            id: 'web-studentoverflow',
            category: 'web',
            priority: 80,
            title: 'StudentOverflow',
            subtitle: 'Full-stack Q&A platform (StackOverflow clone)',
            tech: 'Flask · PostgreSQL · Bootstrap · SQLAlchemy',
            description:
                'Full-stack Q&A platform featuring authentication, voting, search, and image uploads.',
            github: 'https://github.com/RAZermenoSaracho/studentoverflow',
            demo: 'https://studentoverflow-j8tk.onrender.com/'
        },
        {
            id: 'odoo-many2many-razs-widget',
            category: 'odoo',
            priority: 75,
            title: 'Many2many Razs Tags Widget (Odoo App)',
            subtitle: 'Odoo 19 Addon published on the official App Store',
            tech: 'Odoo · JavaScript · XML · SCSS · OWL',
            description:
                'Custom Odoo widget rendering many2many relations as configurable modern tags.',
            appstore: 'https://apps.odoo.com/apps/modules/19.0/many2many_razs_widget',
            github: 'https://github.com/RAZermenoSaracho/many2many_razs_widget'
        },
        {
            id: 'odoo-quote-builder',
            category: 'odoo',
            priority: 70,
            title: 'Quote Builder Report Link (Odoo App)',
            subtitle: 'Odoo 18 Addon published on the official App Store',
            tech: 'Odoo · Python · XML · QWeb · ORM',
            description:
                'Production-ready Odoo module adding a direct report download button to the quotation form.',
            appstore: 'https://apps.odoo.com/apps/modules/18.0/quote_builder_report_link'
        },
        {
            id: 'web-portfolio',
            category: 'web',
            priority: 60,
            title: 'Developer Portfolio',
            subtitle: 'Personal website & project showcase',
            tech: 'React · Vite · CSS',
            description:
                'Responsive portfolio website showcasing projects in data, web development, and software engineering.',
            github: 'https://github.com/RAZermenoSaracho/my-portfolio',
            demo: 'https://razs.vercel.app/'
        },
        {
            id: 'web-moodflow',
            category: 'web',
            priority: 55,
            title: 'MoodFlow',
            subtitle: 'Mood & Weather-based To-Do App',
            tech: 'HTML · CSS · JavaScript · Open-Meteo API',
            description:
                'To-do application adapting task suggestions based on mood and weather conditions.',
            github: 'https://github.com/RAZermenoSaracho/mood-and-weather-based-todo-app',
            demo: 'https://mwflow.vercel.app/'
        },
        {
            id: 'web-pokedex',
            category: 'web',
            priority: 50,
            title: 'Pokédex Explorer',
            subtitle: 'Dynamic Pokémon search interface using the PokéAPI',
            tech: 'HTML · CSS · JavaScript · PokéAPI',
            description:
                'Responsive Pokédex with autocomplete search, animated stat bars, and dynamic theming.',
            github: 'https://github.com/RAZermenoSaracho/pokedex',
            demo: 'https://pokedex-razs.vercel.app/'
        },
        {
            id: 'software-galaga',
            category: 'software',
            priority: 45,
            title: 'Space Shooter Game (Galaga)',
            subtitle: 'Arcade-style desktop game built with Python',
            tech: 'Python · Pygame · OpenCV',
            description:
                'Arcade-style space shooter featuring enemy waves, collisions, and power-ups.',
            github: 'https://github.com/RAZermenoSaracho/galaga'
        },
        {
            id: 'web-todo-app',
            category: 'software',
            priority: 40,
            title: 'Todo App',
            subtitle: 'Minimal task manager',
            tech: 'Python · Tkinter · PostgreSQL',
            description:
                'Simple desktop todo manager with add, complete, and delete functionality.',
            github: 'https://github.com/RAZermenoSaracho/todo_app'
        }
    ];

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
                return priorityB - priorityA; // mayor priority primero
            }
        
            const categoryCompare = a.category.localeCompare(b.category);
            if (categoryCompare !== 0) {
                return categoryCompare;
            }
        
            return a.title.localeCompare(b.title);
        });

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
