import React from 'react';
import { EXPERIENCES, PROFILE } from '../constants';
import { Cpu, Database, Network } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bio */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-primary mb-4 font-mono text-sm">
                <span className="text-primary/50">01.</span> HAQIMDA
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Raqamli Kelajak <span className="text-primary">Muhandisi</span>
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="p-8 border border-primary/20 bg-slate-900/50 relative overflow-hidden group hover:border-primary/50 transition-all duration-500">
                {/* Background Grid inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                <div className="relative z-10">
                    <p className="text-slate-300 mb-6 font-mono text-sm leading-relaxed border-l-2 border-primary pl-4">
                     <span className="text-primary">Ism:</span> {PROFILE.name}<br/>
                     <span className="text-primary">Kasb:</span> {PROFILE.role}<br/>
                     <span className="text-primary">Manzil:</span> {PROFILE.location}
                    </p>
                    <p className="text-slate-400 leading-relaxed text-lg">
                    {PROFILE.aboutLong}
                    </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
               <div className="mt-8 grid grid-cols-3 gap-4">
                 {[
                   { icon: <Cpu />, label: "Arxitektura" },
                   { icon: <Database />, label: "Backend" },
                   { icon: <Network />, label: "Masshtab" }
                 ].map((item, idx) => (
                   <div key={idx} className="flex flex-col items-center justify-center p-4 border border-slate-800 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default group">
                     <div className="text-slate-500 group-hover:text-primary transition-colors mb-2">{item.icon}</div>
                     <span className="text-xs text-slate-500 group-hover:text-white font-mono uppercase transition-colors">{item.label}</span>
                   </div>
                 ))}
               </div>
            </Reveal>
          </div>

          {/* Right Column: Experience */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white font-mono">
                <span className="text-primary">&gt;</span> Tajriba_Tarixi
              </h3>
            </Reveal>
            
            <div className="space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <Reveal key={exp.id} delay={index * 100}>
                  <div className="relative pl-8 border-l border-slate-800 hover:border-primary transition-colors group">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 bg-slate-800 group-hover:bg-primary transition-colors rotate-45"></div>
                    
                    <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="font-bold text-xl text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                      <span className="text-xs font-mono text-primary/80 bg-primary/5 border border-primary/20 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <div className="text-slate-400 text-sm mb-3 font-mono">@ {exp.company}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;