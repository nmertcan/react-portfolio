import { usePreferences } from '../preferences.jsx';
import { copy } from '../data/copy.js';
import { Asset } from './Shared.jsx';

function Preferences() {
  const { theme, language, toggleTheme, toggleLanguage } = usePreferences();
  const t = copy[language];

  return (
    <div className="preferences container">
      <button
        className="theme-control"
        onClick={toggleTheme}
        type="button"
        aria-label={theme === 'light' ? t.enableDarkMode : t.enableLightMode}
        aria-pressed={theme === 'dark'}
      >
        <span className={`theme-track ${theme === 'dark' ? 'active' : ''}`}>
          <Asset name="moon.svg" className="theme-thumb" />
          <Asset name="moon-dot.svg" className="theme-dot" />
        </span>
        <span>{t.theme}</span>
      </button>
      <span className="preference-separator" aria-hidden="true">
        |
      </span>
      <button
        className="language-control"
        type="button"
        onClick={toggleLanguage}
        aria-label={t.switchLanguage}
      >
        <strong>{t.switchLanguage.split(' ')[0]}</strong>{' '}
        {t.switchLanguage.split(' ').slice(1).join(' ')}
      </button>
    </div>
  );
}

export function Header({ identity, t }) {
  return (
    <>
      <Preferences />
      <header className="site-header container">
        <a className="brand" href="#top" aria-label={`${identity.name} ${t.home}`}>
          <Asset name="logo-circle.svg" />
          <span>{identity.initials}</span>
        </a>
        <nav aria-label={t.mainNavigation}>
          <a href="#skills">{t.skills}</a>
          <a href="#projects">{t.projects}</a>
          <a className="button button-outline" href="#contact">
            {t.hire}
          </a>
        </nav>
      </header>
    </>
  );
}
