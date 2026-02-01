import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Send, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-slate-900 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tighter">&lt;Sanjarbek /&gt;</h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Raqamli dunyoda biznesingiz uchun eng yaxshi yechimlarni taklif etaman. Xavfsizlik va tezlik - mening ustuvor vazifam.
                </p>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Navigatsiya</h3>
                <ul className="space-y-2 text-sm text-slate-500">
                    <li><a href="#home" className="hover:text-primary transition-colors">Asosiy</a></li>
                    <li><a href="#about" className="hover:text-primary transition-colors">Haqimda</a></li>
                    <li><a href="#services" className="hover:text-primary transition-colors">Xizmatlar</a></li>
                    <li><a href="#projects" className="hover:text-primary transition-colors">Loyihalar</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Aloqa</h3>
                <p className="text-slate-500 text-sm mb-2">Toshkent, O'zbekiston</p>
                <a href={`mailto:${PROFILE.email}`} className="text-slate-500 text-sm hover:text-primary transition-colors block mb-4">{PROFILE.email}</a>
                
                <div className="flex gap-4">
                    <a href={PROFILE.social.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={PROFILE.social.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href={PROFILE.social.telegram} className="text-slate-400 hover:text-white transition-colors"><Send size={20} /></a>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs font-mono">
                © {new Date().getFullYear()} Sanjarbek Otabekov. Barcha huquqlar himoyalangan.
            </p>
            
            <button 
                onClick={scrollToTop}
                className="p-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all rounded-full group"
            >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;