import { useState, useEffect } from 'react';

export default function DrinkDelivery({ order }) {
  const [annieX, setAnnieX] = useState(110);
  const [arrived, setArrived] = useState(false);
  const [drinkVisible, setDrinkVisible] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!order) return;
    setAnnieX(110);
    setArrived(false);
    setDrinkVisible(true);
    setClicked(false);
    const t = setTimeout(() => {
      setAnnieX(0);
      setTimeout(() => setArrived(true), 1200);
    }, 500);
    return () => clearTimeout(t);
  }, [order]);

  function handleDrinkClick() {
    if (!arrived || !drinkVisible) return;
    setClicked(true);
    setDrinkVisible(false);
  }

  if (!order) return null;

  return (
    <section className="px-8 md:px-24 py-12 overflow-hidden">
      <p className="text-sm tracking-[0.3em] uppercase mb-2 text-center" style={{ color: 'var(--muted)' }}>
        Your Order
      </p>
      <h2 className="font-display text-3xl font-bold mb-8 text-center" style={{ color: 'var(--charcoal)' }}>
        {clicked ? '✨ Enjoy! ✨' : `${order.emoji} ${order.label}`}
      </h2>

      {/* Field scene */}
      <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: '280px' }}>

        {/* Sky */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #fce8f0 0%, #f5f0e8 60%, #c8e6a0 100%)' }} />

        {/* Sun */}
        <div className="absolute top-6 right-12 w-12 h-12 rounded-full"
          style={{ background: '#ffd54f', boxShadow: '0 0 20px #ffd54f88' }} />

        {/* Clouds */}
        <div className="absolute top-8 left-16 opacity-80">
          <div className="w-16 h-8 rounded-full" style={{ background: 'white' }} />
          <div className="w-10 h-8 rounded-full -mt-6 ml-4" style={{ background: 'white' }} />
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(180deg, #c8e6a0 0%, #a8d070 100%)' }} />

        {/* Flowers */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-around px-4 text-2xl select-none">
          {['🌸', '🌼', '🌷', '🌻', '🌸', '🌼', '🌷', '🌻', '🌸', '🌼', '🌷'].map((f, i) => (
            <span key={i}>{f}</span>
          ))}
        </div>

        {/* Annie walking in */}
        <div
          className="absolute bottom-14 flex flex-col items-center"
          style={{
            right: `${annieX}px`,
            transition: 'right 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Annie SVG */}
          <svg width="52" height="72" viewBox="0 0 48 64">
            <ellipse cx="24" cy="22" rx="18" ry="20" fill="#1a0a00" />
            <ellipse cx="24" cy="22" rx="14" ry="15" fill="#f5c5a3" />
            <ellipse cx="24" cy="10" rx="14" ry="8" fill="#1a0a00" />
            <ellipse cx="12" cy="8" rx="6" ry="4" fill="#ff9eb5" transform="rotate(-20 12 8)" />
            <ellipse cx="36" cy="8" rx="6" ry="4" fill="#ff9eb5" transform="rotate(20 36 8)" />
            <circle cx="24" cy="8" r="3" fill="#ff6b9d" />
            <ellipse cx="18" cy="22" rx="3" ry="3.5" fill="#3d2000" />
            <ellipse cx="30" cy="22" rx="3" ry="3.5" fill="#3d2000" />
            <circle cx="19" cy="21" r="1" fill="white" />
            <circle cx="31" cy="21" r="1" fill="white" />
            <ellipse cx="13" cy="27" rx="4" ry="2.5" fill="#ffb3ba" opacity="0.6" />
            <ellipse cx="35" cy="27" rx="4" ry="2.5" fill="#ffb3ba" opacity="0.6" />
            <path d="M18 30 Q24 35 30 30" stroke="#c4785a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="10" y="37" width="28" height="20" rx="6" fill="#ff9eb5" />
            <path d="M18 37 L24 44 L30 37" stroke="white" strokeWidth="1.5" fill="none" />
            <rect x="6" y="20" width="6" height="30" rx="3" fill="#1a0a00" />
            <rect x="36" y="20" width="6" height="30" rx="3" fill="#1a0a00" />
          </svg>

          {/* Drink in hand */}
          {drinkVisible && arrived && (
            <div
              onClick={handleDrinkClick}
              className="absolute -right-8 top-6 text-3xl cursor-pointer hover:scale-125 transition-transform duration-200 select-none"
              title="Click to enjoy!"
              style={{ animation: 'fadeUp 0.4s ease forwards' }}
            >
              {order.emoji.split('')[0]}
            </div>
          )}

          {/* Speech bubble */}
          {arrived && drinkVisible && (
            <div className="absolute -left-36 top-0 text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-md"
              style={{ background: 'white', color: 'var(--charcoal)', border: '1.5px solid #f0d0c0' }}>
              Here's your order! 🎀
            </div>
          )}

          {clicked && (
            <div className="absolute -left-28 top-0 text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-md"
              style={{ background: 'white', color: 'var(--charcoal)', border: '1.5px solid #f0d0c0' }}>
              Enjoy! Come back soon 💕
            </div>
          )}
        </div>

      </div>
    </section>
  );
}