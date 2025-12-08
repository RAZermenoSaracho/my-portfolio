import { useState } from 'react';
import ProjectCard from './ProjectCard';

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
        id: 'web-odoo',
        category: 'web',
        title: 'Odoo Customization Toolkit',
        subtitle: 'Extensions for ERP workflows',
        tech: 'Python · Odoo · PostgreSQL',
        description:
            'Set of custom Odoo modules to streamline business operations: automated invoicing, project tracking, and reporting views tailored to clients.',
    },
    {
        id: 'web-portfolio',
        category: 'web',
        title: 'Developer Portfolio',
        subtitle: 'This website',
        tech: 'React · Vite · CSS',
        description:
            'Responsive personal portfolio to showcase experience in data and web development, featuring project filtering and smooth navigation.',
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
        // demo: None,
    },
    {
        id: 'odoo-quote-builder',
        category: 'odoo',  // OR 'odoo' if you want a dedicated category
        title: 'Quote Builder Report Link (Odoo App)',
        subtitle: 'Odoo 18 Addon published on the official App Store',
        tech: 'Odoo · Python · XML · QWeb · ORM',
        description:
            'A production-ready Odoo module that adds a direct report download button to the quotation form. Enhances the quoting workflow by linking Quote Builder PDFs with a single click. Published on the official Odoo App Store and used by real customers.',
        appstore: 'https://apps.odoo.com/apps/modules/18.0/quote_builder_report_link'
    },
    {
        id: 'software-galaga',
        category: 'software',
        title: 'Space Shooter Game (Galaga)',
        subtitle: 'Arcade-style desktop game built with Python',
        tech: 'Python · Pygame · OpenCV',
        description:
            'A classic arcade-style space shooter built with Python using Pygame for rendering, collisions, and audio, and OpenCV for animated video backgrounds. Features modular architecture, enemy waves, obstacles, power-ups, and win/lose game states.',
        github: 'https://github.com/RAZermenoSaracho/galaga'
    },
    {
        id: 'web-studentoverflow',
        category: 'web',
        title: 'StudentOverflow',
        subtitle: 'Full-stack Q&A platform (StackOverflow clone)',
        tech: 'Flask · PostgreSQL · Bootstrap · SQLAlchemy',
        description:
            'A full-stack Q&A platform inspired by StackOverflow. Built with Flask and PostgreSQL, featuring user authentication, voting, profile editing, image uploads, search, and a responsive UI. Designed to practice backend architecture, form validation, and production-ready web development.',
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
            'A responsive Pokédex application with autocomplete search, dynamic theming based on Pokémon type, animated stat bars, and a random Pokémon generator. Features client-side rendering, type-based color palettes, and a clean, mobile-friendly UI.',
        github: 'https://github.com/RAZermenoSaracho/pokedex',
        demo: 'https://pokedex-jade-alpha.vercel.app/'
    },
];

const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'data', label: 'Data' },
    { id: 'web', label: 'Web Dev' },
    { id: 'odoo', label: 'Odoo' },
    { id: 'software', label: 'Software' },
];


function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="section">
            <h2>Portfolio</h2>
            <p className="section-intro">
                Here you can find my projects in <strong>Data</strong> and{' '}
                <strong>Web Development</strong>. I’ll keep adding new work as I ship more
                ideas to production.
            </p>

            <div className="filters">
                {FILTERS.map((f) => (
                    <button
                        key={f.id}
                        className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(f.id)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className="cards-grid">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
