import { useState } from 'react';

const MENU_ITEMS = [
  { id: 'strawberry', label: 'Strawberry Cheesecake Matcha', emoji: '🍓🍵' },
  { id: 'blueberry', label: 'Blueberry Cardamom Matcha', emoji: '🫐🍵' },
  { id: 'sesame', label: 'Honey Pancake Latte', emoji: '🍯☕' },
  { id: 'gulab', label: 'Coconut Pudding Latte', emoji: '🥥☕' },
];

export default function CottageHero({ onOrder, darkMode }) {
  const [hovered, setHovered] = useState(false);
  const [ordering, setOrdering] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);

  function handleOrder(item) {
    setSelectedDrink(item);
    setOrdering(false);
    setOrdered(true);
    onOrder(item);
    setTimeout(() => {
      setOrdered(false);
      setHovered(false);
    }, 3000);
  }

  const accent = darkMode ? '#9b6dff' : '#c4784a';
  const wallBg = darkMode ? '#2d2040' : '#f0e0d0';
  const windowBg = (hovered || ordering || ordered)
    ? (darkMode ? '#1a0a2e' : '#fffde7')
    : (darkMode ? '#0a0520' : '#b8d4e8');
  const skyTop = darkMode ? '#0a0520' : '#fce8f0';
  const skyBot = darkMode ? '#1a0a2e' : '#f5f0e8';
  const groundTop = darkMode ? '#1a3320' : '#c8e6a0';
  const groundBot = darkMode ? '#0d2010' : '#a8d070';
  const hairBow = darkMode ? '#b36dff' : '#ff9eb5';
  const bowCenter = darkMode ? '#7c3aed' : '#ff6b9d';
  const shirt = darkMode ? '#7c3aed' : '#ff9eb5';
  const cloudBg = darkMode ? 'rgba(100,80,140,0.5)' : 'rgba(255,255,255,0.85)';

  return (
    <div className="relative w-full overflow-hidden" style={{
      height: '480px',
      background: darkMode
        ? `linear-gradient(180deg, #0a0520 0%, #0a0520 60%, #1a0a2e 100%)`
        : `linear-gradient(180deg, #fce8f0 0%, #fce8f0 55%, #f5f0e8 100%)`,
      transition: 'background 0.8s ease',
    }}>

      {/* Stars in dark mode */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
      <div className="absolute" style={{ top: '28px', right: '10%' }}>
        {darkMode
          ? <div style={{ fontSize: '2.5rem' }}>🌙</div>
          : <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#ffd54f', boxShadow: '0 0 20px #ffd54f99' }} />
        }
      </div>

      {/* Left cloud */}
      <div className="absolute" style={{ top: '28px', left: '12%' }}>
        <div className="relative">
          <div className="w-20 h-12 rounded-full" style={{ background: cloudBg }} />
          <div className="w-14 h-9 rounded-full absolute -top-3 left-3" style={{ background: cloudBg }} />
        </div>
      </div>

      {/* Right cloud */}
      <div className="absolute" style={{ top: '18px', right: '32%' }}>
        <div className="relative">
          <div className="w-16 h-8 rounded-full" style={{ background: darkMode ? 'rgba(100,80,140,0.4)' : 'rgba(255,255,255,0.75)' }} />
          <div className="w-10 h-7 rounded-full absolute -top-3 left-3" style={{ background: darkMode ? 'rgba(100,80,140,0.4)' : 'rgba(255,255,255,0.75)' }} />
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: '120px', background: `linear-gradient(180deg, ${groundTop} 0%, ${groundBot} 100%)`, transition: 'background 0.8s ease' }} />

      {/* Flowers */}
      <div className="absolute left-0 right-0 flex justify-around px-2 text-2xl select-none" style={{ bottom: '90px', zIndex: 5 }}>
        {['🌸','🌼','🌷','🌻','🌸','🌼','🌷','🌻','🌸','🌼','🌷','🌻','🌸','🌼'].map((f, i) => (
          <span key={i}>{f}</span>
        ))}
      </div>
      <div className="absolute left-0 right-0 flex justify-around px-8 text-xl select-none" style={{ bottom: '68px', zIndex: 5 }}>
        {['🌿','🌱','🌿','🌱','🌿','🌱','🌿','🌱','🍀','🌱','🌿','🌱'].map((f, i) => (
          <span key={i}>{f}</span>
        ))}
      </div>

      {/* Cottage */}
      <div className="absolute" style={{ bottom: '119px', left: '50%', transform: 'translateX(-50%)', width: '240px', zIndex: 10 }}>

        {/* Roof */}
        <div style={{ position: 'relative', height: '75px' }}>
          <svg viewBox="0 0 240 75" className="w-full h-full">
            <polygon points="0,75 120,0 240,75" fill={darkMode ? '#4a2060' : '#c4784a'} />
            <polygon points="8,75 120,6 232,75" fill={darkMode ? '#5a3070' : '#d4896a'} />
          </svg>
        </div>

        {/* Walls */}
        <div className="relative w-full" style={{ height: '110px', background: wallBg, borderRadius: '0 0 8px 8px', transition: 'background 0.8s ease' }}>

          {/* Window */}
          <div
            className="absolute cursor-pointer select-none"
            style={{
              top: '12px', left: '50%', transform: 'translateX(-50%)',
              width: '80px', height: '60px',
              background: windowBg,
              border: `3px solid ${accent}`,
              borderRadius: '8px 8px 0 0',
              transition: 'background 0.3s',
              overflow: 'hidden',
            }}
            onMouseEnter={() => { if (!ordered) setHovered(true); }}
            onMouseLeave={() => { if (!ordering && !ordered) setHovered(false); }}
            onClick={() => { if (hovered && !ordered) setOrdering(true); }}
          >
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: accent, transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: accent, transform: 'translateX(-50%)' }} />

            {/* Annie inside window */}
            {(hovered || ordering || ordered) && (
              <div style={{ position: 'absolute', bottom: 0, left: '20%', transform: 'translateX(-50%)', animation: 'fadeUp 0.4s ease forwards' }}>
                <svg width="44" height="52" viewBox="0 0 48 56">
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
                  <rect x="6" y="20" width="6" height="25" rx="3" fill="#1a0a00" />
                  <rect x="36" y="20" width="6" height="25" rx="3" fill="#1a0a00" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Speech bubble */}
      {hovered && !ordering && !ordered && (
        <div className="absolute z-20 px-4 py-3 rounded-2xl shadow-lg text-sm"
          style={{
            bottom: '190px', left: 'calc(50% - 280px)',
            background: 'white', border: '1.5px solid #f0d0c0',
            color: '#1a1a1a',
            animation: 'fadeUp 0.3s ease forwards', whiteSpace: 'nowrap',
          }}>
          Click to order! ☕
          <div style={{ position: 'absolute', right: '-8px', top: '12px', width: '12px', height: '12px', background: 'white', border: '1.5px solid #f0d0c0', borderLeft: 'none', borderBottom: 'none', transform: 'rotate(45deg)' }} />
        </div>
      )}

      {/* Order confirmation */}
      {ordered && (
        <div className="absolute z-20 px-4 py-3 rounded-2xl shadow-lg text-sm"
          style={{
            bottom: '190px', left: 'calc(50% - 340px)',
            background: 'white', border: '1.5px solid #f0d0c0',
            color: '#1a1a1a',
            animation: 'fadeUp 0.3s ease forwards', maxWidth: '260px',
          }}>
          Coming right up! ✨<br />
          <span style={{ color: '#8a8070', fontSize: '0.75rem' }}>
            Scroll down and explore Annie's experience while you wait!
          </span>
          <div style={{ position: 'absolute', right: '-8px', top: '12px', width: '12px', height: '12px', background: 'white', border: '1.5px solid #f0d0c0', borderLeft: 'none', borderBottom: 'none', transform: 'rotate(45deg)' }} />
        </div>
      )}

      {/* Menu sign */}
      {ordering && (
        <div className="absolute z-20 flex flex-col items-center"
          style={{ bottom: '108px', left: 'calc(40% - 300px)', animation: 'fadeUp 0.3s ease forwards' }}>
          <div className="rounded-2xl p-4 shadow-xl"
            style={{ background: '#fffde7', border: `2.5px solid ${accent}`, minWidth: '220px' }}>
            <p className="font-display text-center text-sm font-bold mb-3" style={{ color: '#1a1a1a' }}>
              ☕ Today's Menu ☕
            </p>
            <div className="flex flex-col gap-2">
              {MENU_ITEMS.map(item => (
                <button key={item.id} onClick={() => handleOrder(item)}
                  className="text-left text-xs px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-150 w-full"
                  style={{ background: '#fff0f5', border: '1px solid #ffb3ba', color: '#1a1a1a' }}>
                  {item.emoji} {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="w-2 h-8" style={{ background: accent }} />
        </div>
      )}

    </div>
  );
}