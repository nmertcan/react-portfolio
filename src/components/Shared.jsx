export function Asset({ name, alt = '', className = '', loading }) {
  return (
    <img
      src={`/assets/${name}`}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
}

export function SafeLink({ href, children, className = '' }) {
  if (!href)
    return (
      <span className={`${className} unavailable-link`} aria-disabled="true">
        {children}
      </span>
    );

  const external = href.startsWith('http');
  return (
    <a
      className={className}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
