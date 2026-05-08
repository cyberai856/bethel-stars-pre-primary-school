import { Newspaper, ArrowRight, Calendar, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const news = [
    { title: '2024 Registration Now Open', date: 'May 01, 2024', cat: 'Admission' },
    { title: 'New ICT Lab Completion', date: 'April 15, 2024', cat: 'Facility' },
    { title: 'Inter-School Sports Gala', date: 'March 20, 2024', cat: 'Activities' },
    { title: 'Standard 7 Mock Results', date: 'March 05, 2024', cat: 'Academic' },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Announcement Board</h1>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tight">Latest News</h2>
          </div>
          <p className="text-slate-500 text-sm italic border-l-2 border-primary pl-4 max-w-xs">
            Stay updated with everything happening at Bethelstars Pre & Primary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col group hover:shadow-2xl transition-all h-full">
               <div className="flex justify-between items-center mb-8">
                  <span className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{item.cat}</span>
                  <span className="text-xs text-slate-400 flex items-center space-x-2">
                     <Calendar size={14} />
                     <span>{item.date}</span>
                  </span>
               </div>
               <h3 className="text-2xl font-bold mb-6 text-slate-900 group-hover:text-primary transition-colors flex-grow uppercase tracking-tight">{item.title}</h3>
               <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <button className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors">
                     <span>Read Full Article</span>
                     <ArrowRight size={18} />
                  </button>
                  <Bookmark size={18} className="text-slate-300" />
               </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
             View All Archives
           </button>
        </div>
      </div>
    </div>
  );
}
