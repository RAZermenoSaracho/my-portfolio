import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    const PROJECTS = [
        {
            id: 'data-eda',
            category: 'data',
            title: 'Financial Data Explorer',
            subtitle: 'Exploratory data analysis & dashboards',
            tech: 'Python · Pandas · Plotly · SQL',
            description:
                'End-to-end analysis pipeline for financial time-series: cleaning, feature engineering, and interactive dashboards to explore patterns and trends.',
        },
        {
            id: 'data-etl',
            category: 'data',
            title: 'ETL Pipeline for Business Metrics',
            subtitle: 'Automated reporting',
            tech: 'Python · Airflow (or cron) · PostgreSQL',
            description:
                'ETL workflow that consolidates data from multiple sources, calculates KPIs, and stores them in a relational database for downstream reporting.',
        },
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
    ];

    const FILTERS = [
        { id: 'all', label: 'All' },
        { id: 'data', label: 'Data' },
        { id: 'web', label: 'Web Dev' },
        { id: 'odoo', label: 'Odoo' },
        { id: 'software', label: 'Software' },
    ];

    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? [...PROJECTS].sort((a, b) => {
                const categoryCompare = a.category.localeCompare(b.category);
                return categoryCompare !== 0
                    ? categoryCompare
                    : a.title.localeCompare(b.title);
            })
            : [...PROJECTS]
                .filter(p => p.category === activeFilter)
                .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2>Portfolio</h2>

            <p className={styles.sectionIntro}>
                Here you can find my projects in <strong>Data</strong> and{' '}
                <strong>Web Development</strong>. I’ll keep adding new work as I ship more ideas
                to production.
            </p>

            {/* FILTER BUTTONS */}
            <div className={styles.filters}>
                {FILTERS.map((f) => (
                    <button
                        key={f.id}
                        className={`${styles.filterBtn} ${activeFilter === f.id ? styles.active : ''}`}
                        onClick={() => setActiveFilter(f.id)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* GRID OF PROJECT CARDS */}
            <div className={styles.cardsGrid}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
