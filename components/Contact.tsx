
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Using Formspree for reliable email delivery to shemashetou7@gmail.com
    try {
      const response = await fetch('https://formspree.io/f/xykkgzpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Inquiry: ${formData.subject}`
        })
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 6000);
      } else {
        throw new Error('Submission failed. Please try again or email me directly.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-xs font-black tracking-[0.3em] text-emerald-500 uppercase mb-6">Connect</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-stone-100">
            Let's build <br />
            <span className="gradient-text">resilient</span> software.
          </h3>
          <p className="text-lg text-stone-400 mb-12 leading-relaxed max-w-md">
            I'm interested in freelance opportunities, full time engineering roles, and open source collaborations.
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-stone-900 border border-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest mb-1">E-Mail</p>
                <p className="text-xl font-bold text-stone-100">shemashetou7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-stone-900 border border-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest mb-1">Direct Dial</p>
                <p className="text-xl font-bold text-stone-100">+250 792 831 227</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111114] p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h4 className="text-3xl font-black mb-4 text-stone-100">Dispatched!</h4>
              <p className="text-stone-400">Transmission received. I will review and respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black text-stone-600 uppercase tracking-[0.2em] mb-3 ml-1">Identity</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[#0a0a0c] border border-white/10 focus:border-emerald-500/50 rounded-2xl px-6 py-5 text-stone-200 transition-all outline-none"
                    placeholder="E.g. Elon Musk"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black text-stone-600 uppercase tracking-[0.2em] mb-3 ml-1">Return Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-[#0a0a0c] border border-white/10 focus:border-emerald-500/50 rounded-2xl px-6 py-5 text-stone-200 transition-all outline-none"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-black text-stone-600 uppercase tracking-[0.2em] mb-3 ml-1">Context</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-[#0a0a0c] border border-white/10 focus:border-emerald-500/50 rounded-2xl px-6 py-5 text-stone-200 transition-all outline-none"
                  placeholder="Inquiry or Partnership"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-black text-stone-600 uppercase tracking-[0.2em] mb-3 ml-1">Communication</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-[#0a0a0c] border border-white/10 focus:border-emerald-500/50 rounded-2xl px-6 py-5 text-stone-200 transition-all outline-none resize-none"
                  placeholder="Elaborate on your vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              {error && (
                <p className="text-red-400 text-xs font-bold px-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-900 disabled:text-stone-600 text-white font-black uppercase tracking-widest py-6 rounded-2xl transition-all shadow-xl shadow-emerald-900/30 active:scale-[0.98] flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing...
                  </>
                ) : 'Initiate Contact'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
