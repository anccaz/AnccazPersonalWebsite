import { research } from '../portfolio';

export default function Research() {
  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Academic Work
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Research
      </h2>

      <div className="flex flex-col gap-10">
        {research.map((r, i) => (
          <div key={i} className="border-l-4 pl-8 py-2" style={{ borderColor: 'var(--accent)' }}>
            <h3 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--charcoal)' }}>
              {r.lab}
            </h3>
            <p className="text-lg font-medium mb-1" style={{ color: 'var(--accent)' }}>
              {r.role}
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {r.institution} · {r.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}