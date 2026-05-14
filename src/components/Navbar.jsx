export default function Navbar() {
    const links = ['Experience', 'Research', 'Organizations', 'Languages'];
  
    return (
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-24 py-5 flex items-center justify-between"
        style={{
          background: 'rgba(245, 240, 232, 0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <a
          href="#"
          className="font-display text-xl font-bold"
          style={{ color: 'var(--charcoal)' }}
        >
          AL
        </a>
  
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity duration-200"
              style={{ color: 'var(--charcoal)' }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    );
  }