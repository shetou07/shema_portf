
import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0a0a0c] border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="text-3xl font-black tracking-tighter flex items-center justify-center md:justify-start group mb-6"
          >
            <span className="gradient-text">SHEMA _</span>
            <span className="text-stone-100">_ COLLINS</span>
          </a>
          <p className="text-stone-600 text-xs font-black uppercase tracking-widest max-w-xs mx-auto md:mx-0">
            Engineered for performance. Crafted for everyone.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://linkedin.com/in/shema-collins-shetou07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-stone-900 hover:bg-emerald-600 border border-white/5 transition-all text-stone-400 hover:text-white" 
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a 
            href="https://github.com/shetou07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-stone-900 hover:bg-emerald-600 border border-white/5 transition-all text-stone-400 hover:text-white" 
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a 
            href="https://x.com/Shetou07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-stone-900 hover:bg-emerald-600 border border-white/5 transition-all text-stone-400 hover:text-white" 
            aria-label="X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-stone-700 text-[10px] font-black uppercase tracking-widest">
          © {new Date().getFullYear()} Shema Collins. Built in the 250.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-stone-700 hover:text-emerald-500 text-[10px] font-black uppercase tracking-widest transition-colors">Privacy</a>
          <a href="#" className="text-stone-700 hover:text-emerald-500 text-[10px] font-black uppercase tracking-widest transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
