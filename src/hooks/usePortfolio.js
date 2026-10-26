import { useCallback, useEffect, useState } from 'react';

const PORTFOLIO_API_URL = 'https://projects.razs.dev/portfolio';

// Fetches the portfolio once on mount. status: loading | ready | error.
export default function usePortfolio() {
    const [state, setState] = useState({ status: 'loading', data: null });
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        let cancelled = false;
        fetch(PORTFOLIO_API_URL)
            .then(res => {
                if (!res.ok) throw new Error(`Request failed: ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (data?.version !== 1) throw new Error('Unsupported portfolio version');
                if (!cancelled) setState({ status: 'ready', data });
            })
            .catch(() => { if (!cancelled) setState({ status: 'error', data: null }); });
        return () => { cancelled = true; };
    }, [attempt]);

    const retry = useCallback(() => {
        setState({ status: 'loading', data: null });
        setAttempt(a => a + 1);
    }, []);

    return { ...state, retry };
}
