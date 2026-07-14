import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkMode', false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)] font-mono border-b border-[var(--color-border-light)] transition-colors duration-400">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-16">
        <Link to="/" className="text-sm font-bold tracking-[0.1rem] text-[var(--color-text)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" onClick={closeMenu}>NPH</Link>

        <ul className={`md:flex md:static absolute top-16 left-0 right-0 bg-[var(--color-bg)] md:bg-transparent border-b md:border-none border-[var(--color-border-light)] md:py-0 py-6 m-0 p-0 list-none items-center gap-8 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          <li className="flex justify-center w-full md:w-auto p-3 md:p-0">
            <button 
              className="bg-transparent border-[1.5px] border-[var(--color-border-strong)] rounded-md cursor-pointer p-1.5 flex items-center justify-center text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-hover-bg)]" 
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              <svg className={isDarkMode ? 'hidden' : 'block'} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              <svg className={isDarkMode ? 'block' : 'hidden'} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
          </li>
          <li className="w-full text-center md:w-auto"><Link className="block py-3 md:py-0 text-xs tracking-[0.2em] text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" to="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li className="w-full text-center md:w-auto"><a className="block py-3 md:py-0 text-xs tracking-[0.2em] text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" href="/#skills" onClick={closeMenu}>SKILLS</a></li>
          <li className="w-full text-center md:w-auto"><Link className="block py-3 md:py-0 text-xs tracking-[0.2em] text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" to="/projects" onClick={closeMenu}>PROJECTS</Link></li>
          <li className="w-full text-center md:w-auto"><a className="block py-3 md:py-0 text-xs tracking-[0.2em] text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" href="/#contact" onClick={closeMenu}>CONTACT</a></li>
        </ul>

        <button 
          className="md:hidden bg-transparent border-none cursor-pointer p-2 flex flex-col gap-[5px]"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className={`block w-[22px] h-[2px] bg-[var(--color-text)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
          <span className={`block w-[22px] h-[2px] bg-[var(--color-text)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[22px] h-[2px] bg-[var(--color-text)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}