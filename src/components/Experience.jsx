import { experience } from '../portfolio';
import { useState, useEffect, useRef } from 'react';

export default function Experience() {
  const [carPosition, setCarPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
              // Calculate position as percentage from bottom
              const total = experience.length - 1;
              const pct = ((total - index) / total) * 88;
              setCarPosition(pct);
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

  return (
    <section ref={sectionRef} className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Where I've Been
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Experience
      </h2>

      <div className="relative border-l-2 pl-10 flex flex-col gap-14" style={{ borderColor: 'var(--accent)' }}>

        {/* Car */}
        <span
          className="car-emoji"
          style={{ bottom: `${carPosition}%` }}
        >
          ✈️
        </span>

        {experience.map((job, i) => (
          <div
            key={i}
            ref={el => itemRefs.current[i] = el}
            className="relative transition-all duration-500"
            style={{ opacity: activeIndex === null || activeIndex === i ? 1 : 0.5 }}
          >
            {/* dot on the line */}
            <div
              className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300"
              style={{
                background: activeIndex === i ? 'var(--accent)' : 'var(--cream)',
                borderColor: 'var(--accent)',
                transform: activeIndex === i ? 'scale(1.3)' : 'scale(1)',
              }}
            />

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