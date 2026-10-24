import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { usePersistentPreference } from './hooks/usePersistentPreference.js';

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = usePersistentPreference('portfolio-theme', ['light', 'dark'], 'light');
  const [language, setLanguage] = usePersistentPreference('portfolio-language', ['en', 'tr'], 'en');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    [setTheme],
  );
  const toggleLanguage = useCallback(
    () => setLanguage((current) => (current === 'en' ? 'tr' : 'en')),
    [setLanguage],
  );
  const value = useMemo(
    () => ({
      theme,
      language,
      toggleTheme,
      toggleLanguage,
    }),
    [theme, language, toggleTheme, toggleLanguage],
  );
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error('usePreferences must be used inside PreferencesProvider');
  return value;
}
