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
];

const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'data', label: 'Data' },
    { id: 'web', label: 'Web Dev' },
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
