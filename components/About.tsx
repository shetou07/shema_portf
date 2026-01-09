
import React from 'react';
import { SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="p-10 rounded-[2.5rem] bg-[#111114] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-all"></div>
            
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3 text-stone-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center border border-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              My Tech Stack
            </h4>

            <div className="space-y-10">
              <div>
                <p className="text-[10px] font-black text-stone-500 uppercase tracking-[0.3em] mb-5">Building</p>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.filter(s => s.category !== 'design').map(skill => (
                    <span key={skill.name} className="px-5 py-2.5 rounded-xl bg-stone-900 border border-white/5 text-stone-300 text-xs font-bold hover:border-emerald-500/30 transition-colors">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-stone-500 uppercase tracking-[0.3em] mb-5">Designing</p>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.filter(s => s.category === 'design' || s.category === 'other').map(skill => (
                    <span key={skill.name} className="px-5 py-2.5 rounded-xl bg-stone-900 border border-white/5 text-stone-300 text-xs font-bold hover:border-emerald-500/30 transition-colors">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-xs font-black tracking-[0.3em] text-emerald-500 uppercase mb-6">The Backstory</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-stone-100">
            Obsessed with <br />
            <span className="text-stone-500">how things work.</span>
          </h3>
          <p className="text-lg text-stone-400 mb-8 leading-relaxed">
            I'm a Rwandan based developer who finds joy in the intersection of clean code and meaningful design. My journey isn't just about syntax,  it's about solving real world friction, whether that's monitoring driver behavior or architecting systems for local banks.
          </p>
          <p className="text-lg text-stone-400 mb-10 leading-relaxed">
            Currently, I'm focusing on building resilient web applications and exploring the potential of blockchain and AI to create more transparent digital ecosystems. I believe in software that is inclusive, performant, and honest.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-stone-900/40 border border-white/5 group hover:border-emerald-500/20 transition-all">
              <h4 className="text-stone-100 font-bold mb-1 group-hover:text-emerald-400 transition-colors">Education</h4>
              <p className="text-stone-400 text-sm">B.Sc Software Engineering</p>
              <p className="text-stone-600 text-[10px] font-bold uppercase tracking-widest mt-2">Makerere University</p>
            </div>
            <div className="p-6 rounded-3xl bg-stone-900/40 border border-white/5 group hover:border-emerald-500/20 transition-all">
              <h4 className="text-stone-100 font-bold mb-1 group-hover:text-emerald-400 transition-colors">Based In</h4>
              <p className="text-stone-400 text-sm">Kigali, Rwanda</p>
              <p className="text-stone-600 text-[10px] font-bold uppercase tracking-widest mt-2">Available Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
