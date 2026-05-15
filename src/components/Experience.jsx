import { experience } from '../portfolio';
import { useState, useEffect, useRef } from 'react';

export default function Experience({ darkMode }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [catY, setCatY] = useState(0);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
              if (timelineRef.current) {
                const timelineRect = timelineRef.current.getBoundingClientRect();
                const itemRect = entry.target.getBoundingClientRect();
                const relativeY = itemRect.top - timelineRect.top;
                setCatY(relativeY);
              }
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const accent = darkMode ? '#9b6dff' : 'var(--accent)';
  const textMain = darkMode ? '#f0e8ff' : 'var(--charcoal)';
  const textMuted = darkMode ? '#c4b0e8' : 'var(--muted)';
  const catEmoji = darkMode ? '🐈‍⬛' : '🐈';

  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: textMuted }}>
        Where I've Been
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: textMain }}>
        Experience
      </h2>

      <div ref={timelineRef} className="relative border-l-2 pl-10 flex flex-col gap-14" style={{ borderColor: accent }}>

        {/* Cat sitting next to active item */}
        <div
          className="absolute text-2xl select-none pointer-events-none"
          style={{
            top: `${catY}px`,
            left: '-52px',
            transition: 'top 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: darkMode ? 'brightness(1)' : 'none',
          }}
        >
          {catEmoji}
        </div>

        {experience.map((job, i) => (
          <div
            key={i}
            ref={el => itemRefs.current[i] = el}
            className="relative transition-all duration-500"
            style={{ opacity: activeIndex === null || activeIndex === i ? 1 : 0.45 }}
          >
            <div
              className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300"
              style={{
                background: activeIndex === i ? accent : (darkMode ? '#0a0520' : 'var(--cream)'),
                borderColor: accent,
                transform: activeIndex === i ? 'scale(1.3)' : 'scale(1)',
              }}
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="font-display text-2xl font-bold" style={{ color: textMain }}>
                {job.company}
              </h3>
              {job.upcoming && (
                <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full mt-1 md:mt-0 w-fit"
                  style={{ background: accent, color: darkMode ? '#0a0520' : 'var(--cream)' }}>
                  Upcoming
                </span>
              )}
            </div>

            <p className="text-lg font-medium mb-1" style={{ color: accent }}>
              {job.role}
            </p>

            <p className="text-sm" style={{ color: textMuted }}>
              {job.location} · {job.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}