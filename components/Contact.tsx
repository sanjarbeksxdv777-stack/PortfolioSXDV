import React, { useState } from 'react';
import { Mail, MapPin, Send, Terminal } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Buyruq bajarildi: Xabar muvaffaqiyatli yuborildi!");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-2 block">04. ALOQA_URNATISH</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Men Bilan <span className="text-primary glitch-text" data-text="BOG'LANING">BOG'LANING</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-slate-900 border border-primary/30 p-1 relative shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            {/* Terminal Header */}
            <div className="bg-slate-950 px-4 py-2 flex items-center justify-between border-b border-primary/30">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">root@sanjar-portfolio:~</div>
            </div>

            <div className="p-8 md:p-12 bg-slate-900/90">
                <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                
                <div className="space-y-1">
                    <label className="text-xs text-primary block">$ ism_kiriting</label>
                    <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-slate-950 border-b border-slate-700 text-white px-2 py-2 focus:outline-none focus:border-primary transition-all"
                        placeholder="_"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-primary block">$ email_kiriting</label>
                    <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-slate-950 border-b border-slate-700 text-white px-2 py-2 focus:outline-none focus:border-primary transition-all"
                        placeholder="_"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-primary block">$ xabar_yozing</label>
                    <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-slate-950 border-b border-slate-700 text-white px-2 py-2 focus:outline-none focus:border-primary transition-all resize-none"
                        placeholder="_"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-black font-bold py-4 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                    <Terminal size={16} /> Yuborish
                </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <span className="text-primary"></span> sanjarbek@example.com
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-primary"></span> 41.2995° N, 69.2401° E
                    </div>
                </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 text-center text-slate-600 text-xs font-mono">
            <p>TIZIM.YAKUNLASH(0); // &copy; {new Date().getFullYear()} SANJARBEK_OTABEKOV</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;