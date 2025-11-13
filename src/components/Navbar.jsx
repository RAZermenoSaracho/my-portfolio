import { useState } from 'react';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (target) => {
        const el = document.querySelector(target);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <div className="navbar-logo">
                    <a href="/" className="logo-link" onClick={(e) => e.preventDefault()}>
                        <span className="logo-mark">{'{RZ}'}</span>
                        <span className="logo-text">Ricardo Zermeño</span>
                    </a>
                </div>

                {/* Desktop nav */}
                <nav className="navbar-links">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(`#${s.id}`);
                            }}
                        >
                            {s.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </header>

            {/* Mobile dropdown */}
            {menuOpen && (
                <nav className="mobile-menu">
                    {sections.map((s) => (
                        <button key={s.id} onClick={() => handleNavClick(`#${s.id}`)}>
                            {s.label}
                        </button>
                    ))}
                </nav>
            )}
        </>
    );
}

export default Navbar;
