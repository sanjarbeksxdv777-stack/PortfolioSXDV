import React from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#03081c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-2 block tracking-widest">MENING TAKLIFLARIM</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Maxsus <span className="text-primary">Yechimlar</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div className="p-8 bg-slate-900/40 border border-slate-800 hover:border-primary/40 transition-all duration-300 group hover:bg-slate-900/60 h-full">
                <div className="w-14 h-14 bg-slate-950 border border-slate-800 flex items-center justify-center rounded mb-6 group-hover:scale-110 transition-transform text-primary group-hover:text-white group-hover:border-primary/50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;