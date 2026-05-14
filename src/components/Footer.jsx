export default function Footer() {
    return (
      <footer className="px-8 md:px-24 py-16 mt-12 border-t" style={{ borderColor: '#e0d8cc' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="font-display text-2xl font-bold" style={{ color: 'var(--charcoal)' }}>
            Annie Li
          </p>
  
          <div className="flex gap-8 text-sm tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
            <a href="mailto:liannie6241@gmail.com" className="hover:opacity-60 transition-opacity">Email</a>
            <a href="https://linkedin.com/in/anccaz" target="_blank" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="https://github.com/anccaz" target="_blank" className="hover:opacity-60 transition-opacity">GitHub</a>
          </div>
  
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            © 2026
          </p>
  
        </div>
      </footer>
    );
  }