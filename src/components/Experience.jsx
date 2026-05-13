import { experience } from '../portfolio';

export default function Experience() {
  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Where I've Been
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Experience
      </h2>

      <div className="relative border-l-2 pl-10 flex flex-col gap-14" style={{ borderColor: 'var(--accent)' }}>
        {experience.map((job, i) => (
          <div key={i} className="relative">
            {/* dot on the line */}
            <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full border-2"
              style={{ background: 'var(--cream)', borderColor: 'var(--accent)' }} />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--charcoal)' }}>
                {job.company}
              </h3>
              {job.upcoming && (
                <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full mt-1 md:mt-0 w-fit"
                  style={{ background: 'var(--accent)', color: 'var(--cream)' }}>
                  Upcoming
                </span>
              )}
            </div>

            <p className="text-lg font-medium mb-1" style={{ color: 'var(--accent)' }}>
              {job.role}
            </p>

            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {job.location} · {job.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}