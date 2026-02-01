import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection logic
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    setActiveSection(id);
  };

  const navLinks = [
    { name: '// asosiy', id: 'home' },
    { name: '// haqimda', id: 'about' },
    { name: '// xizmatlar', id: 'services' },
    { name: '// loyihalar', id: 'projects' },
    { name: '// aloqa', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#020617]/90 border-primary/20 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-xl font-bold tracking-tighter text-white flex items-center gap-1 group z-50 cursor-pointer"
          >
            <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">&lt;</span>
            <span className="group-hover:text-primary transition-colors duration-300">Sanjarbek</span>
            <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">/&gt;</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-1 bg-slate-900/50 p-1 rounded-full border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-xs font-mono transition-all px-4 py-2 rounded-full relative overflow-hidden group uppercase ${
                    activeSection === link.id 
                      ? 'text-black font-bold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {/* Active Background Animation */}
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-primary z-[-1] animate-pulse-fast"></span>
                  )}
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="w-px h-6 bg-slate-800"></div>

            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-primary z-50 relative p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-[#020617]/98 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-2xl font-mono transition-all duration-300 transform uppercase ${
                activeSection === link.id 
                  ? 'text-primary scale-110 font-bold border-b-2 border-primary' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex gap-8 mt-12">
            <a href="#" className="p-3 border border-slate-700 rounded-full text-slate-400 hover:text-primary hover:border-primary transition-all"><Github size={24} /></a>
            <a href="#" className="p-3 border border-slate-700 rounded-full text-slate-400 hover:text-primary hover:border-primary transition-all"><Linkedin size={24} /></a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;