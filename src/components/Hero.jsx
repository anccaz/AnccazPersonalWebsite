import { personalInfo } from '../portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-24 relative overflow-hidden">
      {/* background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)', transform: 'translate(30%, -30%)' }} />

      <p className="fade-up delay-1 text-sm tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
        Portfolio
      </p>

      <h1 className="font-display fade-up delay-2 text-6xl md:text-8xl font-bold leading-none mb-6"
        style={{ color: 'var(--charcoal)' }}>
        {personalInfo.name}
      </h1>

      <div className="fade-up delay-3 w-16 h-px mb-6" style={{ background: 'var(--accent)' }} />

      <p className="fade-up delay-4 text-xl md:text-2xl font-light max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
        {personalInfo.degree} · {personalInfo.minor} Minor<br />
        <span className="italic font-display" style={{ color: 'var(--accent)' }}>{personalInfo.school}</span>
        <br />Graduating {personalInfo.gradDate}
      </p>

      <div className="fade-up delay-5 flex gap-6 mt-10 text-sm tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
        <span>Software Engineer</span>
        <span style={{ color: 'var(--accent)' }}>·</span>
        <span>Research Assistant</span>
        <span style={{ color: 'var(--accent)' }}>·</span>
        <span>Development Director</span>
      </div>
    </section>
  );
}