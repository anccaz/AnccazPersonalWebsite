import { projects } from '../portfolio';

export default function Projects() {
  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Things I've Built
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            style={{ borderColor: '#e0d8cc', background: 'rgba(255,255,255,0.5)' }}>

            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-2xl font-bold leading-tight" style={{ color: 'var(--charcoal)' }}>
                  {project.name}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer"
                    className="text-xs tracking-widest uppercase ml-4 mt-1 hover:opacity-60 transition-opacity"
                    style={{ color: 'var(--accent)' }}>
                    GitHub ↗
                  </a>
                )}
              </div>

              {/* Org + Period */}
              <p className="text-sm mb-4" style={{ color: 'var(--accent)' }}>
                {project.organization} · {project.period}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, j) => (
                <span key={j} className="text-xs tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: 'var(--cream)', border: '1px solid #e0d8cc', color: 'var(--muted)' }}>
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