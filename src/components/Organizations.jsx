import { hobbies, organizations } from '../portfolio';

export default function Organizations() {
  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Beyond the Code
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Hobbies & Organizations
      </h2>

      <div className="grid md:grid-cols-2 gap-16">

        {/* Hobbies */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--charcoal)' }}>
            What I Love Doing
          </h3>
          <div className="flex flex-col gap-6">
            {hobbies.map((hobby, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-200">
                  {hobby.emoji}
                </span>
                <span className="font-display text-xl italic" style={{ color: 'var(--charcoal)' }}>
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Organizations */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--charcoal)' }}>
            Student Organizations
          </h3>
          <div className="flex flex-col gap-8 border-l-2 pl-8" style={{ borderColor: 'var(--accent)' }}>
            {organizations.map((org, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full"
                  style={{ background: 'var(--accent)' }} />
                <p className="font-medium text-lg" style={{ color: 'var(--charcoal)' }}>
                  {org.name}
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--accent)' }}>{org.role}</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{org.period}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}