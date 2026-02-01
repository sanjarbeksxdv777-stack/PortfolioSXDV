import React from 'react';
import { SKILLS } from '../constants';
import Reveal from './Reveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#050b1d] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">02. TIZIM_IMKONIYATLARI</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Texnik <span className="text-primary">Arsenal</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="bg-slate-900/50 p-6 border border-slate-800 hover:border-primary/50 hover:bg-slate-800/80 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-slate-400 group-hover:text-primary transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-mono text-slate-200">{skill.name}</h3>
                  </div>
                  <span className="text-primary font-mono text-xs">{skill.level}%</span>
                </div>
                
                {/* Cyber Progress Bar */}
                <div className="w-full h-2 bg-slate-950 border border-slate-800 p-[1px]">
                  <div 
                    className="h-full bg-primary relative" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute right-0 top-0 h-full w-1 bg-white opacity-50 shadow-[0_0_10px_#fff]"></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;