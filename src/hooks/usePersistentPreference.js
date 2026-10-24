import { useEffect, useState } from 'react';

export function readPreference(key, allowed, fallback) {
  try {
    const stored = window.localStorage.getItem(key);
    return allowed.includes(stored) ? stored : fallback;
  } catch {
    return fallback;
  }
}

export function usePersistentPreference(key, allowed, fallback) {
  const [value, setValue] = useState(() => readPreference(key, allowed, fallback));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, value);
    } catch {}
  }, [key, value]);

  return [value, setValue];
}
