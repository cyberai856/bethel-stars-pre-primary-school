import { useState, FormEvent } from 'react';
import { Search, ListFilter, Award, TrendingUp, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Students() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<{name: string, class: string, rank: string, perf: string} | null>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search.toLowerCase().includes('demo')) {
      setResults({
        name: "Student Alpha",
        class: "Standard 4",
        rank: "5th of 45",
        perf: "Excellent (A)"
      });
    } else {
      setResults(null);
    }
  };

  return (
    <div className="py-24 bg-slate-50 min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Students Corner</h1>
          <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Growth & Results</h2>
          <p className="text-slate-600">A dedicated portal for students to track their academic performance and character development.</p>
        </div>

        <div className="max-w-xl mx-auto mb-24">
           <form onSubmit={handleSearch} className="relative group">
              <input 
                type="text" 
                placeholder="Enter Student Name / ID (Type 'demo' to test)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-20 py-6 rounded-[2rem] bg-white border border-slate-200 outline-none focus:ring-8 focus:ring-primary/5 transition-all text-lg font-medium shadow-xl"
              />
              <button 
                type="submit"
                className="absolute right-3 top-3 bottom-3 bg-slate-900 text-white px-8 rounded-[1.5rem] flex items-center space-x-2 font-bold hover:bg-slate-800 transition-all active:scale-95"
              >
                <Search size={20} />
                <span>Track</span>
              </button>
           </form>
           <p className="text-[10px] text-slate-400 uppercase tracking-widest text-center mt-6 flex items-center justify-center space-x-2">
             <Info size={12} />
             <span>Data is updated after every terminal exam cycle.</span>
           </p>
        </div>

        <AnimatePresence>
          {results && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
            >
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6"><Award size={28} /></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Performance Range</h4>
                  <div className="text-3xl font-black text-slate-900">{results.perf}</div>
               </div>
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center col-span-1 md:col-span-2">
                  <div className="flex w-full items-center justify-between mb-6">
                     <div className="text-left">
                        <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{results.name}</h4>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{results.class}</p>
                     </div>
                     <div className="bg-secondary px-4 py-2 rounded-xl text-slate-900 font-black uppercase tracking-widest text-xs">Rank: {results.rank}</div>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
                     <div className="bg-primary h-full w-[92%]" />
                  </div>
                  <div className="w-full flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                     <span>Development Progress</span>
                     <span>92% Excellent</span>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
           <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 uppercase tracking-tight leading-none">Balanced <span className="text-secondary">Developments</span></h3>
              <p className="text-slate-400 mb-10 leading-relaxed italic">"We don't just measure grades; we measure the nourishment of the spirit and the body."</p>
              <div className="space-y-4">
                 {[
                   { label: 'Character Coaching', desc: 'Monthly behavior monitoring and spiritual growth.' },
                   { label: 'Talent Showcase', desc: 'Sports, Arts and Public speaking development.' },
                   { label: 'Leadership Skills', desc: 'Standard 4-7 prefect system and responsibilities.' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-slate-900 transition-all"><TrendingUp size={18} /></div>
                      <div>
                        <h5 className="font-bold uppercase tracking-widest text-sm">{item.label}</h5>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/5 flex items-center justify-center relative hidden md:flex">
              <div className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em] text-center p-12">
                 Student Activity & Showcase Multimedia Player Placeholder
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
