import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, FileCode, ChevronDown, Layers } from 'lucide-react';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  // Boshlanishiga faqat 6 ta loyihani ko'rsatamiz
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-800 pb-6">
            <div>
              <span className="text-primary font-mono text-sm mb-2 block">03. BAJARILGAN_ISHLLAR</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Saralangan Loyihalar</h2>
            </div>
            <div className="font-mono text-xs text-slate-500">
              Jami fayllar: {PROJECTS.length} dona
            </div>
          </div>
        </Reveal>

        {/* 
            GRID TIZIMI:
            - Avtomatik moslashadi (Responsive)
            - Kartochkalar bir xil balandlikda bo'ladi (h-full)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, visibleCount).map((project, idx) => (
            <Reveal key={project.id} delay={idx % 3 * 100} className="h-full">
              <div className="group relative bg-slate-900 border border-slate-800 hover:border-primary transition-colors duration-300 flex flex-col h-full overflow-hidden">
                
                {/* Rasm Qismi */}
                <div className="relative h-48 flex-shrink-0 overflow-hidden border-b border-slate-800 group-hover:border-primary/50">
                  <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 z-20 bg-black/80 px-2 py-1 text-xs font-mono text-primary border border-primary/30 backdrop-blur-sm">
                    ID: {project.id < 10 ? `00${project.id}` : project.id}
                  </div>
                </div>
                
                {/* Matn Qismi - flex-grow ishlatamiz, shunda footer pastga tushadi */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                       <FileCode size={18} className="text-primary/70" /> {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110" title="Kodini ko'rish">
                            <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110" title="Saytga kirish">
                            <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-mono text-xs border-l-2 border-slate-800 pl-3 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Texnologiyalar */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-950 text-[10px] uppercase font-mono text-primary border border-slate-800 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* "Yana yuklash" tugmasi - Agar loyihalar ko'p bo'lsa chiqadi */}
        {visibleCount < PROJECTS.length && (
          <Reveal delay={200}>
            <div className="mt-12 flex justify-center">
              <button 
                onClick={handleShowMore}
                className="group flex items-center gap-2 px-8 py-3 bg-slate-900 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all font-mono text-sm uppercase tracking-wider"
              >
                <Layers size={16} /> 
                Yana ko'rsatish ({PROJECTS.length - visibleCount})
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Projects;