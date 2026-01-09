
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-stone-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
            Architecting <br />
            <span className="gradient-text">efficient</span> <br />
            software.
          </h1>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            I'm <span className="text-stone-100">Shema Collins</span>. I build resilient web applications and decentralized systems with a focus on performance, accessibility, and clean architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-3 group"
            >
              Recent Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="w-full sm:w-auto px-10 py-4 glass border border-white/5 hover:border-white/10 text-stone-200 rounded-2xl font-bold transition-all hover:bg-white/5"
            >
              My Story
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center lg:justify-start space-x-10 text-stone-500">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-stone-100">3+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Years of Craft</span>
            </div>
            <div className="w-px h-10 bg-white/5"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-stone-100">10+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Shipped Projects</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
             <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] -rotate-3 blur-3xl"></div>
             <div className="relative z-10 w-full h-full glass border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl p-4">
                <div className="w-full h-full rounded-[2.2rem] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
                   <img
                     src='./IMG-20260104-WA0029.jpg'
                     alt="Shema Collins"
                     className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                   />
                </div>
             </div>
          </div>
          {/* Floating badge */}
          <div className="absolute bottom-10 -right-4 glass border border-white/10 p-5 rounded-[2rem] shadow-2xl z-20">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                </div>
                <div>
                   <p className="text-[10px] text-stone-500 font-black uppercase tracking-widest">Status</p>
                   <p className="text-sm font-bold text-stone-100">Open for Collaborations</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
