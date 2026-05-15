import { hobbies, organizations } from '../portfolio';
import { useState } from 'react';

import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';

const PHOTOS = [photo1, photo2, photo3, photo4, photo5];

const HEART_CLIP = `polygon(
  50% 90%, 15% 55%, 5% 40%, 5% 28%,
  15% 15%, 30% 10%, 50% 22%,
  70% 10%, 85% 15%, 95% 28%,
  95% 40%, 85% 55%, 50% 90%
)`;

export default function Organizations() {
  const [notes, setNotes] = useState([]);
  const [snowflakes, setSnowflakes] = useState([]);
  const [cookies, setCookies] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleHeartClick() {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlipped(true);
    setTimeout(() => {
      setPhotoIndex(prev => (prev + 1) % PHOTOS.length);
      setFlipped(false);
      setIsAnimating(false);
    }, 600);
  }

  function spawnNotes() {
    const newNotes = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      tx: `${Math.random() * 60 - 30}px`,
      delay: `${Math.random() * 0.8}s`,
      symbol: ['♩', '♪', '♫', '♬'][Math.floor(Math.random() * 4)],
      left: `${Math.random() * 40}px`,
    }));
    setNotes(prev => [...prev, ...newNotes]);
    setTimeout(() => setNotes(prev => prev.filter(n => !newNotes.find(nn => nn.id === n.id))), 5000);
  }

  function spawnSnowflakes() {
    const newFlakes = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      tx: `${Math.random() * 60 - 30}px`,
      delay: `${Math.random() * 0.8}s`,
      symbol: ['❄️', '❅', '❆', '✦'][Math.floor(Math.random() * 4)],
      left: `${Math.random() * 40}px`,
    }));
    setSnowflakes(prev => [...prev, ...newFlakes]);
    setTimeout(() => setSnowflakes(prev => prev.filter(n => !newFlakes.find(nn => nn.id === n.id))), 5000);
  }

  function spawnCookies() {
    const newCookies = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      tx: `${Math.random() * 60 - 30}px`,
      delay: `${Math.random() * 0.8}s`,
      symbol: ['🍪', '🍩', '🧇', '🍫'][Math.floor(Math.random() * 4)],
      left: `${Math.random() * 40}px`,
    }));
    setCookies(prev => [...prev, ...newCookies]);
    setTimeout(() => setCookies(prev => prev.filter(n => !newCookies.find(nn => nn.id === n.id))), 5000);
  }

  function getSpawnFn(name) {
    if (name === 'Karaoke') return spawnNotes;
    if (name === 'Figure Skating') return spawnSnowflakes;
    if (name === 'Baking') return spawnCookies;
    return undefined;
  }

  function getParticles(name) {
    if (name === 'Karaoke') return notes;
    if (name === 'Figure Skating') return snowflakes;
    if (name === 'Baking') return cookies;
    return [];
  }

  function getParticleClass(name) {
    if (name === 'Karaoke') return 'music-note';
    if (name === 'Figure Skating') return 'snowflake';
    if (name === 'Baking') return 'cookie';
    return '';
  }

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
            What I Love
          </h3>
          <div className="flex flex-col gap-6">
            {hobbies.map((hobby, i) => (
              <div
                key={i}
                className="flex items-center gap-5 group relative"
                onMouseEnter={getSpawnFn(hobby.name)}
              >
                <div className="relative">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-200 inline-block">
                    {hobby.emoji}
                  </span>
                  {getParticles(hobby.name).map(particle => (
                    <span
                      key={particle.id}
                      className={getParticleClass(hobby.name)}
                      style={{
                        '--tx': particle.tx,
                        animationDelay: particle.delay,
                        left: particle.left,
                        top: '-10px',
                        color: 'var(--accent)',
                      }}
                    >
                      {particle.symbol}
                    </span>
                  ))}
                </div>
                <span className="font-display text-xl italic" style={{ color: 'var(--charcoal)' }}>
                  {hobby.name}
                </span>
              </div>
            ))}

            {/* Heart photo card — below baking */}
            <div className="mt-4 flex flex-col items-start">
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--muted)' }}>
                click to flip ♡
              </p>
              <div
                className="flip-card"
                style={{ width: '160px', height: '180px' }}
                onClick={handleHeartClick}
              >
                <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                  {/* Front */}
                  <div className="flip-card-front">
                    <div
                      className="girly-border w-full h-full overflow-hidden shadow-lg"
                      style={{
                        clipPath: HEART_CLIP,
                        background: '#fff0f5',
                        borderRadius: '4px',
                      }}
                    >
                      <img
                        src={PHOTOS[photoIndex]}
                        alt="Annie"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Back — shows next photo hint */}
                  <div className="flip-card-back">
                    <div
                      className="girly-border w-full h-full overflow-hidden shadow-lg flex items-center justify-center"
                      style={{
                        clipPath: HEART_CLIP,
                        background: '#fff0f5',
                        borderRadius: '4px',
                      }}
                    >
                      <span style={{ fontSize: '2.5rem' }}>💛</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
                {photoIndex + 1} / {PHOTOS.length}
              </p>
            </div>

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
                <div className="flex items-center gap-2">
                  <p className="font-medium text-lg" style={{ color: 'var(--charcoal)' }}>
                    {org.name}
                  </p>
                  {org.link && (
                    <a href={org.link} target="_blank" rel="noreferrer"
                      className="hover:opacity-60 transition-opacity"
                      style={{ color: 'var(--muted)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="15,3 21,3 21,9" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="10" y1="14" x2="21" y2="3" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
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