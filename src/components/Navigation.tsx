import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className={`font-display text-2xl font-bold tracking-tight transition-colors ${
            isScrolled ? 'text-foreground' : 'text-foreground'
          }`}>
            C
            <span className="text-[hsl(var(--hero-accent))]">.</span>
            E
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                isScrolled ? 'text-foreground' : 'text-foreground/90'
              } hover:text-[hsl(var(--hero-accent))] ${
                activeSection === link.href.slice(1) ? 'text-[hsl(var(--hero-accent))]' : ''
              }`}
            >
              {link.label}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-[hsl(var(--hero-accent))] transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0'
                }`} 
              />
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
              isScrolled 
                ? 'bg-secondary hover:bg-secondary/80' 
                : 'bg-card/20 backdrop-blur-sm hover:bg-card/40'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-foreground" />
            ) : (
              <Sun size={18} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 active:scale-95 ${
              isScrolled 
                ? 'bg-secondary' 
                : 'bg-card/20 backdrop-blur-sm'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-foreground" />
            ) : (
              <Sun size={18} className="text-foreground" />
            )}
          </button>
          
          <button
            className={`p-2 rounded-lg transition-all duration-200 active:scale-95 ${
              isScrolled 
                ? 'text-foreground hover:bg-secondary' 
                : 'text-foreground hover:bg-card/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t border-border transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-2 font-medium transition-all duration-200 active:scale-98 ${
                activeSection === link.href.slice(1) 
                  ? 'text-[hsl(var(--hero-accent))]' 
                  : 'text-foreground hover:text-[hsl(var(--hero-accent))]'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
