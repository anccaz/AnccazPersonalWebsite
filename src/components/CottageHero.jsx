import { useState } from 'react';

const MENU_ITEMS = [
  { id: 'strawberry', label: 'Strawberry Cheesecake Matcha', emoji: '🍓🍵' },
  { id: 'blueberry', label: 'Blueberry Cardamom Matcha', emoji: '🫐🍵' },
  { id: 'sesame', label: 'Black Sesame Latte', emoji: '🖤☕' },
  { id: 'gulab', label: 'Gulab Jamun Latte', emoji: '🌹☕' },
];

export default function CottageHero({ onOrder }) {
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
    }, 2500);
  }

  return (
    <div className="relative w-full flex justify-center items-end" style={{ height: '420px' }}>

      {/* Sky background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #fce8f0 0%, #f5f0e8 100%)' }} />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-20 rounded-b-3xl"
        style={{ background: 'linear-gradient(180deg, #c8e6a0 0%, #a8d070 100%)' }} />

      {/* Flowers on ground */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-around px-8 text-xl select-none">
        {['🌸', '🌼', '🌷', '🌸', '🌼', '🌷', '🌸', '🌼'].map((f, i) => (
          <span key={i}>{f}</span>
        ))}
      </div>

      {/* Cottage */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2" style={{ width: '260px' }}>

        {/* Roof */}
        <div className="relative w-full" style={{ height: '80px' }}>
          <svg viewBox="0 0 260 80" className="w-full h-full">
            <polygon points="0,80 130,0 260,80" fill="#c4784a" />
            <polygon points="10,80 130,8 250,80" fill="#d4896a" />
          </svg>
          {/* Chimney */}
          <div className="absolute top-2 right-16 w-6 h-10 rounded-sm"
            style={{ background: '#b06040' }} />
        </div>

        {/* Walls */}
        <div className="relative w-full rounded-b-lg"
          style={{ height: '120px', background: '#f0e0d0' }}>

          {/* Door */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 rounded-t-full"
            style={{ background: '#c4784a' }} />

          {/* Window — the interactive one */}
          <div
            className="absolute top-4 left-6 w-20 h-16 rounded-t-lg cursor-pointer select-none"
            style={{ background: hovered || ordering ? '#fffde7' : '#b8d4e8', border: '3px solid #c4784a', transition: 'background 0.3s' }}
            onMouseEnter={() => { if (!ordered) { setHovered(true); setOrdering(false); } }}
            onMouseLeave={() => { if (!ordering && !ordered) setHovered(false); }}
            onClick={() => { if (hovered && !ordered) setOrdering(true); }}
          >
            {/* Window cross */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-0.5" style={{ background: '#c4784a' }} />
              <div className="absolute h-full w-0.5" style={{ background: '#c4784a' }} />
            </div>

            {/* Annie peeking out */}
            {(hovered || ordering || ordered) && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ animation: 'fadeUp 0.4s ease forwards' }}>
                {/* Annie drawing */}
                <svg width="48" height="64" viewBox="0 0 48 64">
                  {/* Hair back */}
                  <ellipse cx="24" cy="22" rx="18" ry="20" fill="#1a0a00" />
                  {/* Face */}
                  <ellipse cx="24" cy="22" rx="14" ry="15" fill="#f5c5a3" />
                  {/* Hair front */}
                  <ellipse cx="24" cy="10" rx="14" ry="8" fill="#1a0a00" />
                  {/* Bow */}
                  <ellipse cx="12" cy="8" rx="6" ry="4" fill="#ff9eb5" transform="rotate(-20 12 8)" />
                  <ellipse cx="36" cy="8" rx="6" ry="4" fill="#ff9eb5" transform="rotate(20 36 8)" />
                  <circle cx="24" cy="8" r="3" fill="#ff6b9d" />
                  {/* Eyes */}
                  <ellipse cx="18" cy="22" rx="3" ry="3.5" fill="#3d2000" />
                  <ellipse cx="30" cy="22" rx="3" ry="3.5" fill="#3d2000" />
                  {/* Eye shine */}
                  <circle cx="19" cy="21" r="1" fill="white" />
                  <circle cx="31" cy="21" r="1" fill="white" />
                  {/* Blush */}
                  <ellipse cx="13" cy="27" rx="4" ry="2.5" fill="#ffb3ba" opacity="0.6" />
                  <ellipse cx="35" cy="27" rx="4" ry="2.5" fill="#ffb3ba" opacity="0.6" />
                  {/* Smile */}
                  <path d="M18 30 Q24 35 30 30" stroke="#c4785a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Body / top */}
                  <rect x="10" y="37" width="28" height="20" rx="6" fill="#ff9eb5" />
                  {/* Collar */}
                  <path d="M18 37 L24 44 L30 37" stroke="white" strokeWidth="1.5" fill="none" />
                  {/* Long hair strands */}
                  <rect x="6" y="20" width="6" height="30" rx="3" fill="#1a0a00" />
                  <rect x="36" y="20" width="6" height="30" rx="3" fill="#1a0a00" />
                </svg>

                {/* Speech bubble */}
                {!ordering && !ordered && (
                  <div className="absolute -right-28 top-0 text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-md"
                    style={{ background: 'white', color: 'var(--charcoal)', border: '1.5px solid #f0d0c0' }}>
                    Click to order! ☕
                    <div className="absolute left-0 top-3 w-2 h-2 rotate-45 -translate-x-1"
                      style={{ background: 'white', borderLeft: '1.5px solid #f0d0c0', borderBottom: '1.5px solid #f0d0c0' }} />
                  </div>
                )}

                {ordered && (
                  <div className="absolute -right-36 top-0 text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-md"
                    style={{ background: 'white', color: 'var(--charcoal)', border: '1.5px solid #f0d0c0' }}>
                    {selectedDrink?.emoji} One {selectedDrink?.label} coming right up!
                    <div className="absolute left-0 top-3 w-2 h-2 rotate-45 -translate-x-1"
                      style={{ background: 'white', borderLeft: '1.5px solid #f0d0c0', borderBottom: '1.5px solid #f0d0c0' }} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Second window (decorative) */}
          <div className="absolute top-4 right-6 w-20 h-16 rounded-t-lg"
            style={{ background: '#b8d4e8', border: '3px solid #c4784a' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-0.5" style={{ background: '#c4784a' }} />
              <div className="absolute h-full w-0.5" style={{ background: '#c4784a' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Menu sign */}
      {ordering && (
        <div className="absolute z-20 flex flex-col items-center"
          style={{ bottom: '140px', left: '50%', transform: 'translateX(-110px)', animation: 'fadeUp 0.3s ease forwards' }}>
          {/* Sign post */}
          <div className="w-2 h-16" style={{ background: '#c4784a' }} />
          {/* Sign board */}
          <div className="absolute bottom-12 -translate-y-full rounded-xl p-4 shadow-xl"
            style={{ background: '#fffde7', border: '2.5px solid #c4784a', minWidth: '220px' }}>
            <p className="font-display text-center text-sm font-bold mb-3" style={{ color: 'var(--charcoal)' }}>
              ☕ Today's Menu ☕
            </p>
            <div className="flex flex-col gap-2">
              {MENU_ITEMS.map(item => (
                <button key={item.id} onClick={() => handleOrder(item)}
                  className="text-left text-xs px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-150 w-full"
                  style={{ background: '#fff0f5', border: '1px solid #ffb3ba', color: 'var(--charcoal)' }}>
                  {item.emoji} {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}