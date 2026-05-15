export default function Navbar({ darkMode }) {
  const links = ['Experience', 'Research', 'Projects', 'Organizations', 'Languages'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-24 py-5 flex items-center justify-between"
      style={{
        background: darkMode ? 'rgba(10,5,32,0.9)' : 'rgba(245,240,232,0.85)',
        backdropFilter: 'blur(12px)',
        transition: 'background 0.8s ease',
      }}>

      <a href="#" className="font-display text-xl font-bold"
        style={{ color: darkMode ? '#f0e8ff' : 'var(--charcoal)' }}>
        AL
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity duration-200"
            style={{ color: darkMode ? '#f0e8ff' : 'var(--charcoal)' }}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}