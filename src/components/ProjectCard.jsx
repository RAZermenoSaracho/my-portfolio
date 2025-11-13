function ProjectCard({ project }) {
    const isWeb = project.category === 'web';
    const badgeText = project.category === 'data' ? 'DATA' : 'WEB DEV';

    return (
        <div className="card">

            {/* Top-right badge but not absolute */}
            <div className="card-badge-wrapper">
                <span className={`badge ${isWeb ? 'badge-alt' : ''}`}>
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
                {project.demo && (
                    <>
                        {' · '}
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </>
                )}
                {!project.github && !project.demo && (
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        Details coming soon
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
