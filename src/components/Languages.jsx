import { languages } from '../portfolio';

export default function Languages() {
  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Communication
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Languages
      </h2>

      <div className="grid md:grid-cols-2 gap-16">

        {/* Spoken Languages */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--charcoal)' }}>
            Spoken
          </h3>
          <div className="flex flex-col gap-6">
            {languages.spoken.map((lang, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4"
                style={{ borderColor: '#e0d8cc' }}>
                <span className="text-lg font-medium" style={{ color: 'var(--charcoal)' }}>
                  {lang.name}
                </span>
                <span className="text-sm tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--charcoal)' }}>
            Programming
          </h3>
          <div className="flex flex-wrap gap-4">
            {languages.programming.map((lang, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full border"
                style={{ borderColor: 'var(--accent)', color: 'var(--charcoal)' }}>
                <span className="text-xl">{lang.icon}</span>
                <span className="font-medium">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}