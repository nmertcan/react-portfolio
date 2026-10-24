import { useCallback, useEffect, useRef, useState } from 'react';
import portfolio from '../data/portfolio.json' with { type: 'json' };
import { getPortfolio } from '../services/portfolioApi.js';

export function usePortfolioData() {
  const [data, setData] = useState(() => ({ ...portfolio, apiStatus: 'loading' }));
  const requestId = useRef(0);

  const load = useCallback(async (refresh = false) => {
    const currentRequest = ++requestId.current;
    if (refresh) setData((current) => ({ ...current, apiStatus: 'loading' }));
    const result = await getPortfolio({ refresh });
    if (currentRequest === requestId.current) setData(result);
  }, []);

  useEffect(() => {
    load();
    return () => {
      requestId.current += 1;
    };
  }, [load]);

  return { data, retry: () => load(true) };
}
