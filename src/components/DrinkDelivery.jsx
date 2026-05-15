import { useState, useEffect, useRef } from 'react';

export default function DrinkDelivery({ order, darkMode }) {
  const [phase, setPhase] = useState('idle');
  const timers = useRef([]);

  function clearTimers() {
    timers.current.forEach(t => clearTimeout(t));
    timers.current = [];
  }

  function addTimer(fn, delay) {
    const t = setTimeout(fn, delay);
    timers.current.push(t);
    return t;
  }

  useEffect(() => {
    if (!order) return;
    clearTimers();
    setPhase('entering');
    addTimer(() => setPhase('arrived'), 1500);
    addTimer(() => setPhase('announcing'), 1900);
    addTimer(() => setPhase('drinkVisible'), 3200);
    return clearTimers;
  }, [order]);

  function handleDrinkClick() {
    if (phase !== 'drinkVisible') return;
    clearTimers();
    setPhase('clicked');
    addTimer(() => setPhase('sparkle'), 300);
    addTimer(() => setPhase('bye'), 900);
    addTimer(() => setPhase('exiting'), 2800);
    addTimer(() => setPhase('done'), 4400);
  }

  if (!order || phase === 'idle' || phase === 'done') return null;

  const annieRight =
    phase === 'entering' ? '-160px' :
    phase === 'exiting' ? '-220px' : '60px';

  const skyColor = darkMode
    ? 'linear-gradient(180deg, #0a0520 0%, #1a0a2e 50%, #1a3320 100%)'
    : 'linear-gradient(180deg, #f5f0e8 0%, #fce8f0 35%, #fce8f0 65%, #c8e6a0 100%)';
  const groundTop = darkMode ? '#1a3320' : '#c8e6a0';
  const groundBot = darkMode ? '#0d2010' : '#a8d070';
  const shirt = darkMode ? '#7c3aed' : '#ff9eb5';
  const hairBow = darkMode ? '#b36dff' : '#ff9eb5';
  const bowCenter = darkMode ? '#7c3aed' : '#ff6b9d';
  const cloudBg = darkMode ? 'rgba(100,80,140,0.4)' : 'rgba(255,255,255,0.85)';

  return (
    <section className="relative overflow-hidden" style={{ height: '320px', background: skyColor, transition: 'background 0.8s ease' }}>

      {/* Stars */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: (i % 3) + 1 + 'px', height: (i % 3) + 1 + 'px',
                background: 'white',
                top: (i * 7) % 50 + '%', left: (i * 13) % 100 + '%',
                opacity: 0.3 + (i % 3) * 0.2,
              }} />
          ))}
        </div>
      )}

      {/* Sun or Moon */}
      <div className="absolute" style={{ top: '16px', right: '8%' }}>
        {darkMode
          ? <div style={{ fontSize: '2.2rem' }}>🌙</div>
          : <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#ffd54f', boxShadow: '0 0 20px #ffd54f99' }} />
        }
      </div>

      {/* Clouds */}
      <div className="absolute" style={{ top: '20px', left: '10%' }}>
        <div className="relative">
          <div className="w-20 h-10 rounded-full" style={{ background: cloudBg }} />
          <div className="w-14 h-10 rounded-full absolute -top-4 left-3" style={{ background: cloudBg }} />
        </div>
      </div>
      <div className="absolute" style={{ top: '28px', right: '30%' }}>
        <div className="relative">
          <div className="w-16 h-8 rounded-full" style={{ background: cloudBg }} />
          <div className="w-10 h-7 rounded-full absolute -top-3 left-3" style={{ background: cloudBg }} />
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0"
        style={{ height: '100px', background: `linear-gradient(180deg, ${groundTop} 0%, ${groundBot} 100%)` }} />

      {/* Flowers */}
      <div className="absolute left-0 right-0 flex justify-around px-2 text-2xl select-none" style={{ bottom: '72px' }}>
        {['🌸','🌼','🌷','🌻','🌸','🌼','🌷','🌻','🌸','🌼','🌷','🌻','🌸'].map((f, i) => (
          <span key={i}>{f}</span>
        ))}
      </div>
      <div className="absolute left-0 right-0 flex justify-around px-4 text-lg select-none" style={{ bottom: '52px' }}>
        {['🌿','🌱','🌿','🌱','🌿','🌱','🌿','🌱','🍀','🌱','🌿','🌱'].map((f, i) => (
          <span key={i}>{f}</span>
        ))}
      </div>

      {/* Drink emoji */}
      {['drinkVisible','clicked','sparkle'].includes(phase) && (
        <div
          onClick={handleDrinkClick}
          className="absolute z-20 select-none"
          style={{
            top: '40%', left: '50%',
            transform: `translate(-50%, -50%) scale(${phase === 'clicked' ? 1.5 : 1})`,
            fontSize: '4rem',
            cursor: phase === 'drinkVisible' ? 'pointer' : 'default',
            transition: 'transform 0.2s ease',
            animation: phase === 'drinkVisible' ? 'fadeUp 0.5s ease forwards' : undefined,
          }}
        >
          {phase === 'sparkle' ? '✨' : order.emoji}
        </div>
      )}

      {/* Annie */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          bottom: '88px',
          right: annieRight,
          transition: 'right 1.4s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 10,
        }}
      >
        <svg width="52" height="64" viewBox="0 0 48 64">
          <ellipse cx="24" cy="22" rx="18" ry="20" fill="#1a0a00" />
          <ellipse cx="24" cy="22" rx="14" ry="15" fill="#f5c5a3" />
          <ellipse cx="24" cy="10" rx="14" ry="8" fill="#1a0a00" />
          <ellipse cx="12" cy="8" rx="6" ry="4" fill={hairBow} transform="rotate(-20 12 8)" />
          <ellipse cx="36" cy="8" rx="6" ry="4" fill={hairBow} transform="rotate(20 36 8)" />
          <circle cx="24" cy="8" r="3" fill={bowCenter} />
          <ellipse cx="18" cy="22" rx="3" ry="3.5" fill="#3d2000" />
          <ellipse cx="30" cy="22" rx="3" ry="3.5" fill="#3d2000" />
          <circle cx="19" cy="21" r="1" fill="white" />
          <circle cx="31" cy="21" r="1" fill="white" />
          <ellipse cx="13" cy="27" rx="4" ry="2.5" fill="#ffb3ba" opacity="0.6" />
          <ellipse cx="35" cy="27" rx="4" ry="2.5" fill="#ffb3ba" opacity="0.6" />
          <path d="M18 30 Q24 35 30 30" stroke="#c4785a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="10" y="37" width="28" height="20" rx="6" fill={shirt} />
          <path d="M18 37 L24 44 L30 37" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="6" y="20" width="6" height="28" rx="3" fill="#1a0a00" />
          <rect x="36" y="20" width="6" height="28" rx="3" fill="#1a0a00" />
        </svg>

        {/* Announcing */}
        {phase === 'announcing' && (
          <div className="absolute text-xs px-3 py-2 rounded-xl shadow-md whitespace-nowrap"
            style={{ bottom: '70px', right: '50px', background: 'white', border: '1.5px solid #f0d0c0', color: '#1a1a1a', animation: 'fadeUp 0.4s ease forwards' }}>
            Your {order.label} is ready! 🎀<br />
            <span style={{ color: '#8a8070', fontSize: '0.65rem' }}>Click the drink!</span>
          </div>
        )}

        {/* Here's your order */}
        {phase === 'drinkVisible' && (
          <div className="absolute text-xs px-3 py-2 rounded-xl shadow-md whitespace-nowrap"
            style={{ bottom: '70px', right: '50px', background: 'white', border: '1.5px solid #f0d0c0', color: '#1a1a1a', animation: 'fadeUp 0.4s ease forwards' }}>
            Here's your order! 🎀<br />
            <span style={{ color: '#8a8070', fontSize: '0.65rem' }}>Click the drink!</span>
          </div>
        )}

        {/* Bye */}
        {phase === 'bye' && (
          <div className="absolute text-xs px-3 py-2 rounded-xl shadow-md whitespace-nowrap"
            style={{ bottom: '70px', right: '50px', background: 'white', border: '1.5px solid #f0d0c0', color: '#1a1a1a', animation: 'fadeUp 0.3s ease forwards' }}>
            Thank you for coming,<br />visit again soon! 💕
          </div>
        )}
      </div>

    </section>
  );
}