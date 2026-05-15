import React from 'react';
import { research } from '../portfolio';
import currentBook from '../assets/current-book.png';
import currentTextbook from '../assets/current-textbook.png';

const GOODREADS_URL = 'https://www.goodreads.com/user/show/138720268-anccaz';

export default function Research() {
  return (
    <section className="px-8 md:px-24 py-24">
      <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
        Academic Work
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: 'var(--charcoal)' }}>
        Research
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Research entries */}
        <div className="flex flex-col gap-10">
          {research.map((r, i) => (
            <div key={i} className="border-l-4 pl-8 py-2" style={{ borderColor: 'var(--accent)' }}>
              <h3 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--charcoal)' }}>
                {r.lab}
              </h3>
              <p className="text-lg font-medium mb-1" style={{ color: 'var(--accent)' }}>
                {r.role}
              </p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                {r.institution} · {r.period}
              </p>
            </div>
          ))}
        </div>

        {/* Open book Link */}
        <a 
          href={GOODREADS_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative flex justify-center items-center select-none"
          style={{ textDecoration: 'none' }}
        >
          {/* Book shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-4 rounded-full blur-md opacity-20"
            style={{ background: '#1a1a1a', transform: 'translate(-50%, 8px)' }} />

          {/* Book wrapper */}
          <div
            className="relative flex rounded-sm overflow-visible group-hover:scale-[1.03] transition-transform duration-300"
            style={{
              width: '320px',
              height: '220px',
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.18))',
            }}
          >

            {/* Spine */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-6 z-20 flex items-center justify-center"
              style={{
                background: 'linear-gradient(90deg, #b06040 0%, #e8a878 40%, #c4784a 60%, #8a4820 100%)',
                boxShadow: '0 0 8px rgba(0,0,0,0.25)',
              }}>
              <div className="absolute top-3 left-0 right-0 h-px opacity-40" style={{ background: '#fff' }} />
              <div className="absolute bottom-3 left-0 right-0 h-px opacity-40" style={{ background: '#fff' }} />
            </div>

            {/* Left page — current book */}
            <div className="relative flex-1 rounded-l-sm overflow-hidden"
              style={{
                background: '#fdf8f0',
                borderRight: '1px solid #e0c8a8',
                boxShadow: 'inset -4px 0 8px rgba(0,0,0,0.08)',
              }}>
              <div className="absolute top-0 left-0 right-0 h-6 flex flex-col justify-center gap-1 px-3 opacity-30">
                <div className="h-px" style={{ background: '#8a8070' }} />
                <div className="h-px" style={{ background: '#8a8070' }} />
              </div>
              <div className="absolute inset-4 rounded overflow-hidden">
                <img src={currentBook} alt="Currently reading" className="w-full h-full object-cover rounded" />
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6"
                style={{
                  background: 'linear-gradient(135deg, #e8d8c0 50%, transparent 50%)',
                  opacity: 0.6,
                }} />
              <div className="absolute bottom-2 left-0 right-0 text-center"
                style={{ fontSize: '0.55rem', color: '#8a8070', letterSpacing: '0.1em' }}>
                CURRENTLY READING
              </div>
            </div>

            {/* Right page — textbook */}
            <div className="relative flex-1 rounded-r-sm overflow-hidden"
              style={{
                background: '#fdf8f0',
                borderLeft: '1px solid #e0c8a8',
                boxShadow: 'inset 4px 0 8px rgba(0,0,0,0.08)',
              }}>
              <div className="absolute top-0 left-0 right-0 h-6 flex flex-col justify-center gap-1 px-3 opacity-30">
                <div className="h-px" style={{ background: '#8a8070' }} />
                <div className="h-px" style={{ background: '#8a8070' }} />
              </div>
              <div className="absolute inset-4 rounded overflow-hidden">
                <img src={currentTextbook} alt="Currently studying" className="w-full h-full object-cover rounded" />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6"
                style={{
                  background: 'linear-gradient(-135deg, #e8d8c0 50%, transparent 50%)',
                  opacity: 0.6,
                }} />
              <div className="absolute bottom-2 left-0 right-0 text-center"
                style={{ fontSize: '0.55rem', color: '#8a8070', letterSpacing: '0.1em' }}>
                CURRENTLY STUDYING
              </div>
            </div>

            {/* Bookmark */}
            <div className="absolute z-30"
              style={{
                top: '-18px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '22px',
              }}>
              <div style={{
                width: '22px',
                height: '70px',
                background: 'linear-gradient(180deg, #ff6b9d 0%, #ff9eb5 60%, #ff6b9d 100%)',
                borderRadius: '2px 2px 0 0',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.15)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '12px',
                  background: `linear-gradient(135deg, #ff6b9d 0%, #ff6b9d 50%, transparent 50%, transparent 100%), 
                              linear-gradient(-135deg, #ff6b9d 0%, #ff6b9d 50%, transparent 50%, transparent 100%)`,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '10px',
                }}>
                  📚
                </div>
              </div>
            </div>

            {/* Hover label */}
            <div className="absolute inset-0 flex items-end justify-center pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
              <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: 'rgba(196,120,74,0.9)', color: 'white', fontSize: '0.6rem' }}>
                View Goodreads ↗
              </span>
            </div>

          </div>
        </a>

      </div>
    </section>
  );
}