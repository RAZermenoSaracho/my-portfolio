import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (target) => {
        const el = document.querySelector(target);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.history.pushState(null, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>

                {/* LOGO */}
                <div>
                    <a href="/" className={styles.logoLink} onClick={handleLogoClick}>
                        <span className={styles.logoMark}>{'{RZ}'}</span>
                        <span className={styles.logoText}>Ricardo Zermeño</span>
                    </a>
                </div>

                {/* DESKTOP NAV */}
                <nav className={styles.navLinks}>
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

                {/* MOBILE HAMBURGER */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </header>

            {/* MOBILE MENU */}
            {menuOpen && (
                <nav className={styles.mobileMenu}>
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
