import { SafeLink } from './Shared.jsx';

export function Footer({ identity, t }) {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2>{t.footer}</h2>
        <div className="footer-bottom">
          {identity.email ? (
            <a className="email-link" href={`mailto:${identity.email}`}>
              👉 {identity.email}
            </a>
          ) : (
            <span className="contact-pending">{t.contactPending}</span>
          )}
          <div>
            {identity.blog && <SafeLink href={identity.blog}>{t.blog}</SafeLink>}
            <SafeLink className="github-link" href={identity.github}>
              Github
            </SafeLink>
            <SafeLink className="linkedin-link" href={identity.linkedin}>
              Linkedin
            </SafeLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
