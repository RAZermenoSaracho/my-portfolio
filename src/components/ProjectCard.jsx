function ProjectCard({ project }) {
    const { category } = project;

    // Badge label based on category
    let badgeText = '';
    if (category === 'data') badgeText = 'DATA';
    else if (category === 'web') badgeText = 'WEB DEV';
    else if (category === 'odoo') badgeText = 'ODOO';
    else if (category === 'software') badgeText = 'SOFTWARE';

    return (
        <div className="card">

            <div className="card-badge-wrapper">
                <span
                    className={`badge 
                        ${category === 'web' ? 'badge-web' : ''} 
                        ${category === 'data' ? 'badge-data' : ''} 
                        ${category === 'odoo' ? 'badge-odoo' : ''}`}
                >
                    {badgeText}
                </span>
            </div>


            <h3 className="project-title">{project.title}</h3>

            {project.subtitle && (
                <p className="card-subtitle">{project.subtitle}</p>
            )}

            <p className="card-meta">{project.tech}</p>
            <p>{project.description}</p>

            <div className="card-links">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                        View on GitHub
                    </a>
                )}

                {project.appstore && (
                    <a href={project.appstore} target="_blank" rel="noreferrer">
                        App Store
                    </a>
                )}

                {project.demo && (
                    <>
                        {' · '}
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </>
                )}

                {!project.github && !project.demo && !project.appstore && (
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        Details coming soon
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
