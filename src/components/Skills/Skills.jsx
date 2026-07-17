import styles from "./Skills.module.css";

function Skills() {
    return (
        <section className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Skills & Technologies</h3>

            <div className={styles.skillCategory}>
                <h4>Backend</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>REST APIs</span>
                    <span className={styles.skill}>Authentication</span>
                    <span className={styles.skill}>PostgreSQL</span>
                    <span className={styles.skill}>SQL</span>
                    <span className={styles.skill}>Database Design</span>
                    <span className={styles.skill}>FastAPI</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Frontend</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>React</span>
                    <span className={styles.skill}>TypeScript</span>
                    <span className={styles.skill}>Tailwind CSS</span>
                    <span className={styles.skill}>Vite</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Blockchain</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>Solidity</span>
                    <span className={styles.skill}>Foundry</span>
                    <span className={styles.skill}>OpenZeppelin</span>
                    <span className={styles.skill}>ERC-20</span>
                    <span className={styles.skill}>ERC-1155</span>
                    <span className={styles.skill}>EVM</span>
                    <span className={styles.skill}>Smart Contracts</span>
                    <span className={styles.skill}>DeFi Fundamentals</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Quant / Trading Systems</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>Python</span>
                    <span className={styles.skill}>Backtesting</span>
                    <span className={styles.skill}>Algorithmic Trading</span>
                    <span className={styles.skill}>Trading Systems Architecture</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Cloud & DevOps</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>AWS (EC2, IAM, Lambda)</span>
                    <span className={styles.skill}>Vercel</span>
                    <span className={styles.skill}>Railway</span>
                    <span className={styles.skill}>Render</span>
                    <span className={styles.skill}>GitHub Actions</span>
                    <span className={styles.skill}>pm2</span>
                    <span className={styles.skill}>Cloudflare Tunnels</span>
                </div>
            </div>

            <div className={styles.skillCategory}>
                <h4>Enterprise Systems</h4>
                <div className={styles.skillGrid}>
                    <span className={styles.skill}>Odoo ERP</span>
                    <span className={styles.skill}>ORM</span>
                    <span className={styles.skill}>XML</span>
                    <span className={styles.skill}>QWeb</span>
                    <span className={styles.skill}>Workflow Automation</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;
