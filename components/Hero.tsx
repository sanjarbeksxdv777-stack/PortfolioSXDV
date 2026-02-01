import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal as TerminalIcon, Download, MousePointer2, FileText } from 'lucide-react';
import Reveal from './Reveal';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  // "System.init" matnini o'zbekcha kontekstga moslashtiramiz
  const fullText = `Tizim.init("${PROFILE.role.replace(/ /g, '_')}")`;
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Demo PDF Base64
    const pdfBase64 = "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXwKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSCisgICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqCjw8IC9MZW5ndGggMjIyID4+CnN0cmVhbQpCVAo3MCA1MCBUZAovRjEgMTIgVGYKKFNhbmphcmJlayBPdGFiZWtvdiAtIENWKSBUagpFVApCVAo3MCAzNSBUZAovRjEgMTAgVGYKKFNlbmlvciBGdWxsIFN0YWNrIERldmVsb3BlcikgVGoKRVQKQlQKNzAgMjAgVGQKL0YxIDEwIFRmCihDb250YWN0OiBzYW5qYXJiZWtAZXhhbXBsZS5jb20pIFRqCkVVCmVuZHN0cmVhbQplbmRvYmoKCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxMCAwMDAwMCBuIAowMDAwMDAwMDYwIDAwMDAwIG4gCjAwMDAwMDAxNTcgMDAwMDAgbiAKMDAwMDAwMDI1NSAwMDAwMCBuIAowMDAwMDAwMzM5IDAwMDAwIG4gCnRyYWlsZXIKPDwKICAvU2l6ZSA2CiAgL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjYxMQolJUVPRgo=";

    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${pdfBase64}`;
    link.download = `Sanjarbek_Otabekov_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-12 bg-[#020617]">
      
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Subtle Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                <Reveal>
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-800 text-primary text-xs font-mono rounded-md">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        {PROFILE.status}
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div className="font-mono text-primary mb-2 text-sm sm:text-base"> Salom, men</div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
                        {PROFILE.name}
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-500 mb-6">
                        {PROFILE.role}
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="bg-slate-950/50 p-4 border-l-2 border-primary mb-8 max-w-lg backdrop-blur-sm">
                         <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-2">
                             <TerminalIcon size={12} /> Tizim Konsoli
                         </div>
                         <div className="font-mono text-sm sm:text-base text-primary/90 min-h-[1.5em]">
                             {text}<span className="animate-pulse">_</span>
                         </div>
                    </div>
                </Reveal>

                <Reveal delay={300}>
                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                        {PROFILE.aboutShort}
                    </p>
                </Reveal>

                <Reveal delay={400}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <a 
                        href="#projects" 
                        onClick={handleScrollToProjects}
                        className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-black font-semibold transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide rounded-sm"
                        >
                            Loyihalar <ArrowRight size={18} />
                        </a>
                        
                        <button 
                        onClick={handleDownloadCV}
                        className="w-full sm:w-auto px-8 py-3 bg-transparent border border-slate-700 hover:border-primary text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide rounded-sm cursor-pointer"
                        >
                            CV Yuklab Olish <FileText size={18} />
                        </button>
                    </div>
                </Reveal>
            </div>

            {/* Right Image - Clean & Modern Rectangular Frame */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                <Reveal delay={200} className="w-full flex justify-center lg:justify-end">
                    
                    <div className="relative group w-full max-w-md">
                        {/* Decorative Frame Lines */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 transition-all group-hover:border-primary/60 group-hover:w-32 group-hover:h-32"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 transition-all group-hover:border-primary/60 group-hover:w-32 group-hover:h-32"></div>

                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/5] bg-slate-900 overflow-hidden rounded-sm shadow-2xl shadow-primary/10">
                             
                             {/* Image */}
                             <img 
                                src={PROFILE.heroImage} 
                                alt={PROFILE.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                             
                             {/* Overlay Gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-60"></div>

                             {/* Floating Badge */}
                             <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded">
                                 <div className="flex items-center justify-between text-xs font-mono">
                                     <span className="text-white font-bold">SYSTEM_ARCHITECT</span>
                                     <span className="text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> ONLINE</span>
                                 </div>
                             </div>
                        </div>
                    </div>

                </Reveal>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest text-slate-500">PASTGA</span>
            <MousePointer2 size={16} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;