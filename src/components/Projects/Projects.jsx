import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    const PROJECTS = [
        // {
        //     id: 'data-eda',
        //     category: 'data',
        //     title: 'Financial Data Explorer',
        //     subtitle: 'Exploratory data analysis & dashboards',
        //     tech: 'Python · Pandas · Plotly · SQL',
        //     description:
        //         'End-to-end analysis pipeline for financial time-series: cleaning, feature engineering, and interactive dashboards to explore patterns and trends.',
        // },
        // {
        //     id: 'data-etl',
        //     category: 'data',
        //     title: 'ETL Pipeline for Business Metrics',
        //     subtitle: 'Automated reporting',
        //     tech: 'Python · Airflow (or cron) · PostgreSQL',
        //     description:
        //         'ETL workflow that consolidates data from multiple sources, calculates KPIs, and stores them in a relational database for downstream reporting.',
        // },
        {
            id: 'web-portfolio',
            category: 'web',
            title: 'Developer Portfolio',
            subtitle: 'Personal website & project showcase',
            tech: 'React · Vite · CSS',
            description:
                'Responsive personal portfolio showcasing projects in data, web development, and software engineering. Includes project filtering, clean UI, and smooth navigation.',
            github: 'https://github.com/RAZermenoSaracho/my-portfolio',
            demo: 'https://razs.vercel.app/'
        },
        {
            id: 'web-todo-app',
            category: 'software',
            title: 'Todo App',
            subtitle: 'Minimal task manager',
            tech: 'Python · Tkinter · PostgreSQL',
            description:
                'A simple todo application to manage tasks: add, complete, and remove items. Built to practice component structure, state management, and clean UI interactions.',
            github: 'https://github.com/RAZermenoSaracho/todo_app',
        },
        {
            id: 'odoo-quote-builder',
            category: 'odoo',
            title: 'Quote Builder Report Link (Odoo App)',
            subtitle: 'Odoo 18 Addon published on the official App Store',
            tech: 'Odoo · Python · XML · QWeb · ORM',
            description:
                'Production-ready Odoo module adding a direct report download button to the quotation form. Published on the official Odoo App Store and used in real-world environments.',
            appstore: 'https://apps.odoo.com/apps/modules/18.0/quote_builder_report_link'
        },
        {
            id: 'software-galaga',
            category: 'software',
            title: 'Space Shooter Game (Galaga)',
            subtitle: 'Arcade-style desktop game built with Python',
            tech: 'Python · Pygame · OpenCV',
            description:
                'A classic arcade-style space shooter featuring collisions, audio, enemy waves, power-ups, and modular game architecture.',
            github: 'https://github.com/RAZermenoSaracho/galaga'
        },
        {
            id: 'web-studentoverflow',
            category: 'web',
            title: 'StudentOverflow',
            subtitle: 'Full-stack Q&A platform (StackOverflow clone)',
            tech: 'Flask · PostgreSQL · Bootstrap · SQLAlchemy',
            description:
                'A full-stack Q&A platform featuring authentication, voting, profile editing, search, and image uploads.',
            github: 'https://github.com/RAZermenoSaracho/studentoverflow',
            demo: 'https://studentoverflow-j8tk.onrender.com/'
        },
        {
            id: 'web-pokedex',
            category: 'web',
            title: 'Pokédex Explorer',
            subtitle: 'Dynamic Pokémon search interface using the PokéAPI',
            tech: 'HTML · CSS · JavaScript · PokéAPI',
            description:
                'A responsive Pokédex with autocomplete search, dynamic theming by Pokémon type, animated stat bars, and a random generator.',
            github: 'https://github.com/RAZermenoSaracho/pokedex',
            demo: 'https://pokedex-razs.vercel.app/'
        },
        {
            id: 'web-moodflow',
            category: 'web',
            title: 'MoodFlow',
            subtitle: 'Mood & Weather-based To-Do App',
            tech: 'HTML · CSS · JavaScript · Open-Meteo API · localStorage',
            description:
                'A smart to-do application that adapts task suggestions based on the user’s mood and real-time weather conditions. Features full CRUD functionality, responsive design, dynamic filters, and contextual task recommendations.',
            github: 'https://github.com/RAZermenoSaracho/mood-and-weather-based-todo-app',
            demo: 'https://mwflow.vercel.app/'
        },
        {
            id: 'web-real-value-marketing',
            category: 'web',
            title: 'Real Value Marketing',
            subtitle: 'Lead Generation Website with CRM Integration',
            tech: 'React · TypeScript · Vite · Node.js · Express · Odoo CRM · Vercel · Railway',
            description:
                'A high-conversion marketing website designed for B2B lead generation. Includes a custom Book a Call flow connected to Odoo CRM via a secure backend API, automatic contact and company creation, responsive UI, smooth animations, and production-grade deployment with custom domain and SSL.',
            github: 'https://github.com/rvazquezme-creator/real-value-marketing',
            demo: 'https://www.realvaluemarketing.com/'
        },
        {
            id: 'odoo-many2many-razs-widget',
            category: 'odoo',
            title: 'Many2many Razs Tags Widget (Odoo App)',
            subtitle: 'Odoo 19 Addon published on the official App Store',
            tech: 'Odoo · JavaScript · XML · SCSS · OWL',
            description:
                'Custom many2many widget for Odoo that renders relational fields as clean, modern tags and allows configuring which related record fields are displayed inside each tag. Published on the official Odoo App Store and compatible with all view types.',
            appstore: 'https://apps.odoo.com/apps/modules/19.0/many2many_razs_widget',
            github: 'https://github.com/RAZermenoSaracho/many2many_razs_widget'
        },
        {
            id: 'spacex-falcon9-landing-prediction',
            category: 'data',
            title: 'SpaceX Falcon 9 Landing Prediction',
            subtitle: 'End-to-end Data Science project with live interactive dashboard',
            tech: 'Python · Pandas · SQL · Scikit-learn · Plotly · Dash · Render',
            description:
                'End-to-end data science project analyzing SpaceX Falcon 9 launch data to predict first-stage landing success. Covers data collection via API and web scraping, data cleaning, exploratory analysis (SQL & visualization), machine learning modeling, and deployment of a live interactive dashboard using Plotly Dash.',
            demo: 'https://spacex-falcon9-landing-prediction-zve7.onrender.com/',
            github: 'https://github.com/RAZermenoSaracho/spacex-falcon9-landing-prediction'
        },
        {
            id: 'web-react-min-handbook',
            category: 'web',
            title: 'React Minimal Handbook',
            subtitle: 'Interactive Guide to Core React Concepts',
            tech: 'React · TypeScript · Vite · Tailwind CSS · React Router · WebSockets · REST APIs · Vercel',
            description:
                'A hands-on React learning application built as a living handbook for core React concepts. The project covers JSX, components, props, state, hooks, Context API, and side effects with real-world examples. Includes live HTTP data fetching, real-time WebSocket updates from public crypto APIs, visual explanations, and production-ready deployment.',
            github: 'https://github.com/RAZermenoSaracho/react-min-handbook',
            demo: 'https://react-min-handbook.vercel.app/'
        },
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
            const categoryCompare = a.category.localeCompare(b.category);
            return categoryCompare !== 0
                ? categoryCompare
                : a.title.localeCompare(b.title);
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
