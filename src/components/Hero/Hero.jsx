import { useState } from "react";
import styles from "./Hero.module.css";

const CV_API_URL = "https://cv-api.razs.dev/cv";

function Hero() {
    const [cvStatus, setCvStatus] = useState("idle"); // idle | loading | error

    const handleDownloadCV = async (e) => {
        e.preventDefault();
        setCvStatus("loading");

        try {
            const response = await fetch(CV_API_URL);
            if (!response.ok) throw new Error(`Request failed: ${response.status}`);

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "Ricardo-Zermeno-CV.pdf";
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(blobUrl);

            setCvStatus("idle");
        } catch (err) {
            setCvStatus("error");
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>

                <p className={styles.heroTagline}>Software Engineer — DeFi & Quantitative Systems</p>

                <h1 className={styles.heroTitle}>
                    I build backend systems for{" "}
                    <span className={styles.highlight}>DeFi</span> and{" "}
                    <span className={styles.highlight}>quantitative finance</span>.
                </h1>

                <p className={styles.heroSubtitle}>
                    Software Engineer with experience in backend financial systems, REST APIs, and
                    quantitative technologies. Currently at Capital One Mexico.
                </p>

                <div className={styles.heroActions}>
                    <a className={`${styles.btn} ${styles.primary}`} href="#projects">
                        View Portfolio
                    </a>

                    <a className={`${styles.btn} ${styles.secondary}`} href="#experience">
                        View Resume
                    </a>

                    <button
                        type="button"
                        className={`${styles.btn} ${styles.ghost}`}
                        onClick={handleDownloadCV}
                        disabled={cvStatus === "loading"}
                    >
                        {cvStatus === "loading" ? "Downloading…" : "Download CV"}
                    </button>
                </div>

                {cvStatus === "error" && (
                    <p className={styles.cvError}>
                        Couldn't download the CV right now. Please try again later.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Hero;
