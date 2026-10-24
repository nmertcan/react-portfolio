import { Asset } from './Shared.jsx';

export function Profile({ profile, t, language }) {
  const values = [profile.birthDate, profile.city, profile.education[language], profile.role];

  return (
    <section className="profile container divided" id="profile" aria-labelledby="profile-title">
      <Asset name="divider.svg" className="design-divider" />
      <h2 id="profile-title">{t.profile}</h2>
      <div className="profile-grid">
        <div>
          <h3>{t.profile}</h3>
          <dl>
            {t.profileLabels.map((label, index) =>
              values[index] ? (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{values[index]}</dd>
                </div>
              ) : null,
            )}
          </dl>
        </div>
        <div className="about">
          <h3>{t.about}</h3>
          {t.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
