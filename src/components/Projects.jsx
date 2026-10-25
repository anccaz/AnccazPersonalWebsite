import { projects } from '../portfolio';

export default function Projects({ darkMode }) {
  const textMain = darkMode ? '#f5eeff' : '#1a1a1a';
  const textBody = darkMode ? '#ddd0f5' : '#8a8070';
  const accent = darkMode ? '#c9a6ff' : '#c4784a';
  const cardBg = darkMode ? '#150b2e' : 'rgba(255,255,255,0.5)';
  const cardBorder = darkMode ? '#4a3580' : '#e0d8cc';
  const tagBg = darkMode ? '#0a0520' : '#f5f0e8';
  const tagBorder = darkMode ? '#4a3580' : '#e0d8cc';
  const tagText = darkMode ? '#ddd0f5' : '#8a8070';
  const eyebrow = darkMode ? '#c4b0e8' : '#8a8070';

  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: eyebrow }}>
        Things I've Built
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: textMain }}>
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            style={{ borderColor: cardBorder, background: cardBg }}
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-2xl font-bold leading-tight" style={{ color: textMain }}>
                  {project.name}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs tracking-widest uppercase ml-4 mt-1 hover:opacity-60 transition-opacity"
                    style={{ color: accent }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

              {/* Org + Period */}
              <p className="text-sm mb-4" style={{ color: accent }}>
                {project.organization} · {project.period}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: textBody }}>
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-xs tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: tagBg, border: `1px solid ${tagBorder}`, color: tagText }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}