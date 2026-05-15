export default function Footer() {
    return (
      <footer className="px-8 md:px-24 py-16 mt-12 border-t" style={{ borderColor: '#e0d8cc' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
  
          <p className="font-display text-2xl font-bold" style={{ color: 'var(--charcoal)' }}>
            Annie Li
          </p>
  
          <div className="flex gap-6 items-center">
            {/* Email */}
            <a href="mailto:your@email.com"
            className="hover:opacity-60 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </a>
  
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/anccaz" target="_blank" rel="noreferrer"
              className="hover:opacity-60 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
  
            {/* GitHub */}
            <a href="https://github.com/anccaz" target="_blank" rel="noreferrer"
              className="hover:opacity-60 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#8a8070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
  
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            © 2026 Anccaz
          </p>
  
        </div>
      </footer>
    );
  }