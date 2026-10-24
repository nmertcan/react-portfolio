import { usePreferences } from './preferences.jsx';
import { copy } from './data/copy.js';
import { usePortfolioData } from './hooks/usePortfolioData.js';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Skills } from './components/Skills.jsx';
import { Profile } from './components/Profile.jsx';
import { Projects } from './components/Projects.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const { language } = usePreferences();
  const { data, retry } = usePortfolioData();
  const t = copy[language];

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        {t.skipToContent}
      </a>
      <Header identity={data.identity} t={t} />
      <main id="main-content">
        <Hero identity={data.identity} t={t} />
        <Skills skills={data.skills} t={t} language={language} />
        <Profile profile={data.profile} t={t} language={language} />
        <Projects
          projects={data.projects}
          t={t}
          language={language}
          apiStatus={data.apiStatus}
          onRetry={retry}
        />
      </main>
      <Footer identity={data.identity} t={t} />
    </div>
  );
}
