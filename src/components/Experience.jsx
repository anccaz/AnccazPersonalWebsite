import { experience } from '../portfolio';
import { useState, useRef, useEffect } from 'react';

const DIM_SUM = [
  { emoji: '🥟' },
  { emoji: '🥮' },
  { emoji: '🍡' },
  { emoji: '🦀' },
];

function Steam() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-44px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '44px',
        zIndex: 99,
        pointerEvents: 'none',
      }}
    >
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${8 + i * 24}px`,
            bottom: 0,
            width: '8px',
            height: '36px',
            borderRadius: '99px',
            background: 'rgba(220,220,220,0.9)',
            animation: `steamRise 1.5s ease-in-out infinite`,
            animationDelay: `${i * 0.28}s`,
            filter: 'blur(3px)',
          }}
        />
      ))}
    </div>
  );
}

export default function Experience({ darkMode }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredBasket, setHoveredBasket] = useState(null);
  const [catY, setCatY] = useState(0);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  const basketToTimeline = (i) => experience.length - 1 - i;

  const effectiveTimelineIndex =
    hoveredBasket !== null ? basketToTimeline(hoveredBasket) : activeIndex;

  useEffect(() => {
    if (effectiveTimelineIndex === null) return;
    const ref = itemRefs.current[effectiveTimelineIndex];
    if (ref && timelineRef.current) {
      const tRect = timelineRef.current.getBoundingClientRect();
      const iRect = ref.getBoundingClientRect();
      setCatY(iRect.top - tRect.top);
    }
  }, [effectiveTimelineIndex]);

  useEffect(() => {
    const refs = itemRefs.current.filter(Boolean);
    if (!refs.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hoveredBasket === null) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: '-5% 0px -5% 0px' }
    );
    refs.forEach(ref => observer.observe(ref));
    return () => observer.disconnect();
  }, [hoveredBasket]);

  const accent = darkMode ? '#9b6dff' : '#c4784a';
  const textMain = darkMode ? '#f0e8ff' : '#1a1a1a';
  const textMuted = darkMode ? '#c4b0e8' : '#8a8070';
  const catEmoji = darkMode ? '🐈‍⬛' : '🐈';
  const reversed = [...experience].reverse();

  return (
    <section className="px-8 md:px-24 py-24">
      <style>{`
        @keyframes steamRise {
          0%   { opacity: 0;   transform: translateY(0)     scaleX(1);   }
          35%  { opacity: 1;                                              }
          100% { opacity: 0;   transform: translateY(-38px) scaleX(1.6); }
        }
      `}</style>

      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: textMuted }}>
        Where I've Been
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: textMain }}>
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative pl-10 flex flex-col gap-14"
          style={{ borderLeft: `2px solid ${accent}` }}
        >
          {effectiveTimelineIndex !== null && (
            <div
              style={{
                position: 'absolute',
                top: `${catY}px`,
                left: '-48px',
                fontSize: '1.6rem',
                transition: 'top 0.5s cubic-bezier(0.4,0,0.2,1)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {catEmoji}
            </div>
          )}

          {experience.map((job, i) => (
            <div
              key={i}
              ref={el => { itemRefs.current[i] = el; }}
              style={{
                position: 'relative',
                opacity: effectiveTimelineIndex === null || effectiveTimelineIndex === i ? 1 : 0.25,
                transition: 'opacity 0.4s ease',
              }}
            >
              <div style={{
                position: 'absolute',
                left: '-2.65rem',
                top: '5px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: `2px solid ${accent}`,
                background: effectiveTimelineIndex === i ? accent : (darkMode ? '#0a0520' : '#f5f0e8'),
                transform: effectiveTimelineIndex === i ? 'scale(1.45)' : 'scale(1)',
                boxShadow: effectiveTimelineIndex === i ? `0 0 12px ${accent}` : 'none',
                transition: 'all 0.3s ease',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h3 className="font-display text-2xl font-bold" style={{ color: textMain }}>
                  {job.company}
                </h3>
                {job.upcoming && (
                  <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: accent, color: darkMode ? '#0a0520' : '#f5f0e8' }}>
                    Upcoming
                  </span>
                )}
              </div>
              <p className="text-lg font-medium mb-1" style={{ color: accent }}>{job.role}</p>
              <p className="text-sm" style={{ color: textMuted }}>{job.location} · {job.period}</p>
            </div>
          ))}
        </div>

        {/* Dim sum tower */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '420px',
        }}>

          {/* Table */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '14px',
            borderRadius: '999px',
            background: darkMode
              ? 'linear-gradient(180deg,#3a2060,#1a0a2e)'
              : 'linear-gradient(180deg,#d4a870,#b8885a)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          }} />

          {/* Baskets */}
          <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            position: 'absolute',
            bottom: '54px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
            {reversed.map((job, i) => {
              const isActive = hoveredBasket === i;
              const dimSum = DIM_SUM[i];

              return (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    zIndex: i + 1,
                    cursor: 'pointer',
                    width: '170px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: i === 0 ? '0px' : '-2px',
                  }}
                  onMouseEnter={() => setHoveredBasket(i)}
                  onMouseLeave={() => setHoveredBasket(null)}
                  onClick={() => {
                    const ti = basketToTimeline(i);
                    setActiveIndex(ti);
                    setHoveredBasket(null);
                  }}
                >
                  {/* Steam */}
                  <div style={{
                    position: 'absolute',
                    top: '-44px',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}>
                    <Steam />
                  </div>

                  {/* Lid */}
                  <div style={{
                    width: '160px',
                    height: '26px',
                    borderRadius: '50% 50% 20% 20% / 80% 80% 20% 20%',
                    background: darkMode
                      ? 'linear-gradient(180deg,#8a7050,#4a3020)'
                      : 'linear-gradient(180deg,#ecc870,#b88030)',
                    boxShadow: isActive
                      ? `0 -6px 22px ${accent}99`
                      : '0 -2px 6px rgba(0,0,0,0.18)',
                    transform: isActive ? 'translateY(-16px)' : 'translateY(0)',
                    transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <div style={{
                      width: '22px', height: '12px', borderRadius: '50%',
                      background: darkMode ? '#9a7050' : '#c47830',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                      zIndex: 1,
                    }} />
                    {[-38,-19,0,19,38].map(x => (
                      <div key={x} style={{
                        position: 'absolute',
                        width: '2px',
                        height: '18px',
                        background: 'rgba(0,0,0,0.12)',
                        left: `calc(50% + ${x}px)`,
                        top: '4px',
                      }} />
                    ))}
                  </div>

                  {/* Body */}
                  <div style={{
                    width: '165px',
                    height: '52px',
                    borderRadius: '6px',
                    background: darkMode
                      ? 'linear-gradient(180deg,#6a5030,#3a2010)'
                      : 'linear-gradient(180deg,#d4a040,#9a6820)',
                    boxShadow: isActive
                      ? `0 6px 24px ${accent}77`
                      : '0 2px 10px rgba(0,0,0,0.22)',
                    transition: 'box-shadow 0.3s, transform 0.35s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  }}>
                    <div style={{ position: 'absolute', inset: 0, opacity: 0.14 }}>
                      {[0,1,2,3,4,5].map(row => (
                        <div key={row} style={{ display: 'flex', height: '9px' }}>
                          {[0,1,2,3,4,5,6,7,8,9].map(col => (
                            <div key={col} style={{
                              width: '17px', height: '9px',
                              background: (row+col)%2===0 ? 'rgba(0,0,0,0.5)' : 'transparent',
                            }} />
                          ))}
                        </div>
                      ))}
                    </div>
                    <div style={{ position: 'absolute', top: 0, left: '8px', right: '8px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
                    <span style={{
                      fontSize: '2rem',
                      position: 'relative',
                      zIndex: 1,
                      filter: isActive ? 'drop-shadow(0 0 10px rgba(255,255,255,1))' : 'none',
                      transition: 'filter 0.3s',
                    }}>
                      {dimSum.emoji}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}