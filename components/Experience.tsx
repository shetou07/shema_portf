
import React from 'react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-xs font-black tracking-[0.3em] text-emerald-500 uppercase mb-6">Path</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-stone-100">Career Evolution</h3>
        <p className="text-stone-400">A timeline of contributions to the software landscape.</p>
      </div>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-emerald-500/20 before:to-transparent">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/20 bg-[#0a0a0c] text-emerald-500 shadow-xl shadow-emerald-900/10 absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-transform group-hover:scale-110">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#111114] p-8 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 ml-16 md:ml-0 shadow-lg group-hover:shadow-emerald-900/5">
               <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <h4 className="font-black text-xl text-emerald-500 tracking-tight leading-tight mb-1">{exp.role}</h4>
                    <p className="text-stone-100 font-bold uppercase tracking-wider text-[11px]">{exp.company}</p>
                  </div>
                  <span className="inline-block self-start px-4 py-1.5 rounded-full bg-stone-900 border border-white/5 text-stone-500 text-[10px] font-black uppercase tracking-widest">
                    {exp.period}
                  </span>
               </div>
               <ul className="space-y-4 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-stone-400 flex items-start gap-4 leading-relaxed">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-1.5 flex-shrink-0"></span>
                       {item}
                    </li>
                  ))}
               </ul>
               <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-stone-900 text-[9px] font-black text-stone-500 uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
