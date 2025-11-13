function ProjectCard({ project }) {
    const isWeb = project.category === 'web';
    const badgeText = project.category === 'data' ? 'Data' : 'Web Dev';

    return (
        <div className="card">
            <div className={`badge ${isWeb ? 'badge-alt' : ''}`}>{badgeText}</div>
            <h3>{project.title}</h3>
            {project.subtitle && <p className="card-subtitle">{project.subtitle}</p>}
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
