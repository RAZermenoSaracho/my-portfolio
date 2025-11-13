function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-tagline">Civil Engineer · Software Engineer</p>
                <h1>
                    I build solutions in <span className="highlight">data</span> and{' '}
                    <span className="highlight">web development</span>.
                </h1>
                <p className="hero-subtitle">
                    I specialize in data analysis, automation with Python, and web application
                    development. I’m seeking remote opportunities (+50k USD) where I can deliver
                    measurable value through technical problem-solving.
                </p>
                <div className="hero-actions">
                    <a className="btn primary" href="#projects">
                        View Portfolio
                    </a>
                    <a className="btn secondary" href="#experience">
                        View Resume
                    </a>
                    {/* We'll connect this to a real CV PDF later */}
                    <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>
                        Download CV (coming soon)
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
