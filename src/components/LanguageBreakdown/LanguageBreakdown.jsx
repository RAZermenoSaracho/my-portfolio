import { useEffect, useState } from "react";
import LANGUAGE_COLORS from "../../utils/languageColors";
import styles from "./LanguageBreakdown.module.css";

// Module-level cache shared by every instance, keyed by GitHub API URL, so
// switching filters (or mounting several cards) never refetches a repo we
// already have data for.
// GitHub's unauthenticated REST API is capped at 60 requests/hour. That's
// fine for this portfolio's repo count today; if it ever becomes a problem,
// add a `Authorization: token <PAT>` header here to raise the limit.
const languageCache = new Map();

function toApiUrl(githubUrl) {
    return (
        githubUrl.replace("https://github.com", "https://api.github.com/repos") +
        "/languages"
    );
}

function fetchRepoLanguages(githubUrl) {
    const apiUrl = toApiUrl(githubUrl);

    if (languageCache.has(apiUrl)) {
        return languageCache.get(apiUrl);
    }

    const request = fetch(apiUrl)
        .then((res) => (res.ok ? res.json() : {}))
        .catch(() => ({}));

    languageCache.set(apiUrl, request);
    return request;
}

// Combines byte counts across all repos before computing percentages, so
// passing multiple repos yields a true aggregate breakdown rather than an
// average of each repo's individual percentages.
function combineLanguageData(perRepoData) {
    const totals = {};

    for (const data of perRepoData) {
        for (const [lang, bytes] of Object.entries(data)) {
            totals[lang] = (totals[lang] || 0) + bytes;
        }
    }

    const total = Object.values(totals).reduce((a, b) => a + b, 0);
    if (total === 0) return null;

    return Object.entries(totals)
        .map(([lang, bytes]) => ({
            lang,
            percent: ((bytes / total) * 100).toFixed(1),
        }))
        .sort((a, b) => b.percent - a.percent);
}

// Fetches GitHub language stats for one or more repos and renders the
// combined breakdown as a bar + legend. Pass a single repo URL for a
// per-project breakdown, or several to get an aggregated view across them.
function LanguageBreakdown({ repos }) {
    const repoKey = (repos || []).filter(Boolean).join("|");
    const [languages, setLanguages] = useState(null);

    useEffect(() => {
        const activeRepos = repoKey ? repoKey.split("|") : [];
        let cancelled = false;

        Promise.all(activeRepos.map(fetchRepoLanguages)).then((results) => {
            if (cancelled) return;
            setLanguages(activeRepos.length > 0 ? combineLanguageData(results) : null);
        });

        return () => {
            cancelled = true;
        };
    }, [repoKey]);

    if (!languages) return null;

    return (
        <div className={styles.langSection}>
            <div className={styles.langBarUnified}>
                {languages.map(({ lang, percent }) => (
                    <div
                        key={lang}
                        className={styles.langBarSegment}
                        style={{
                            width: `${percent}%`,
                            backgroundColor:
                                LANGUAGE_COLORS[lang] || LANGUAGE_COLORS.default,
                        }}
                    />
                ))}
            </div>

            <div className={styles.langLegend}>
                {languages.map(({ lang, percent }) => (
                    <div key={lang} className={styles.langLegendRow}>
                        <span
                            className={styles.langDot}
                            style={{
                                backgroundColor:
                                    LANGUAGE_COLORS[lang] || LANGUAGE_COLORS.default,
                            }}
                        />
                        <span className={styles.langLegendLabel}>{lang}</span>
                        <span className={styles.langLegendPercent}>{percent}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LanguageBreakdown;
