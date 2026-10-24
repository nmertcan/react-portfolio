import { Asset, SafeLink } from './Shared.jsx';

export function Hero({ identity, t }) {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <Asset name="name-line.svg" className="eyebrow-line" />
          {identity.name}
        </div>
        <h1 id="hero-title">
          {t.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p>{t.greeting}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            {t.hire}
          </a>
          <SafeLink className="button button-outline social-button" href={identity.github}>
            <Asset name="github.svg" />
            Github
          </SafeLink>
          <SafeLink className="button button-outline social-button" href={identity.linkedin}>
            <Asset name="linkedin.svg" />
            Linkedin
          </SafeLink>
        </div>
      </div>
      <Asset name="hero.png" alt={t.portraitAlt} className="hero-image" />
    </section>
  );
}
