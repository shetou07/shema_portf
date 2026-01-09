
import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-xs font-black tracking-[0.3em] text-emerald-500 uppercase mb-6">Archive</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight text-stone-100">Selected Works</h3>
        </div>
        <p className="text-stone-400 max-w-sm leading-relaxed border-l border-emerald-500/30 pl-6">
          A focused collection of digital products where performance and user experience collide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative flex flex-col h-full bg-[#111114] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-500 shadow-xl shadow-black/40">
            {/* Image Container */}
            <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[1.8rem]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 brightness-90 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-[2px]">
                <div className="flex space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <a href={project.github} className="p-3.5 rounded-2xl glass hover:bg-emerald-600 transition-all text-white border border-white/10">
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href={project.link} className="p-3.5 rounded-2xl glass hover:bg-emerald-600 transition-all text-white border border-white/10">
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-4 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors tracking-tight text-stone-100">{project.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="pt-6 border-t border-white/5 mt-auto">
                <a href={project.link} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-stone-300 hover:text-emerald-400 transition-colors gap-3">
                  Inspect Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
