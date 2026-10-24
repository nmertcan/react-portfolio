export function Skills({ skills, t, language }) {
  return (
    <section className="skills container" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">{t.skills}</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.description[language]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
