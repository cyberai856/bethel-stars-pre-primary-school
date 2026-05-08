import { Maximize2, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gallery() {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1544717305-27a734ef1974?auto=format&fit=crop&q=80&w=800", title: "Classroom Learning", category: "Academic" },
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800", title: "Graduation Day", category: "Milestone" },
    { url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=800", title: "Creative Arts", category: "Expression" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", title: "Primary Education", category: "Standard 1-7" },
    { url: "https://images.unsplash.com/photo-1566367576585-051277d52997?auto=format&fit=crop&q=80&w=800", title: "Playtime", category: "Physical" },
    { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800", title: "Laboratory Work", category: "Science" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", title: "Nursery Activities", category: "Early Years" },
    { url: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800", title: "Music Lessons", category: "Creative" },
    { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800", title: "School Library", category: "Academic" },
  ];

  return (
    <div className="bg-paper pb-24 min-h-screen">
      {/* Editorial Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container-large">
          <div className="flex flex-col lg:flex-row items-baseline justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                 <span className="w-12 h-[1px] bg-primary" />
                 <span className="micro-label text-primary">In Focus</span>
              </div>
              <h1 className="editorial-title text-slate-900">
                Visual <span className="text-primary italic">Narratives.</span>
              </h1>
            </motion.div>
            <p className="text-slate-500 font-medium max-w-sm italic">
              "Capturing the daily evolution of spirit, brain, and body within our vibrant learning community."
            </p>
          </div>
        </div>
        
        {/* Typographic Watermark */}
        <div className="absolute top-20 -right-10 pointer-events-none select-none">
          <span className="text-[200px] font-black text-slate-900 opacity-[0.03] leading-none tracking-tighter uppercase">
            Captured
          </span>
        </div>
      </section>

      <div className="container-large">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer ${
                i % 4 === 0 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
               <img 
                 src={img.url} 
                 alt={img.title}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
               />
               <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
               
               <div className="absolute bottom-10 left-10 right-10 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white font-black uppercase tracking-tighter text-2xl mb-1">{img.title}</h4>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-[1px] bg-primary" />
                     <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-80">{img.category}</p>
                  </div>
               </div>

               <div className="absolute top-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 size={24} strokeWidth={1.5} />
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 p-20 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-10 gap-2 h-full">
                 {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-white rounded-full" />
                 ))}
              </div>
           </div>
           <div className="max-w-2xl mx-auto relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-primary/40 animate-pulse">
                <PlayCircle size={40} />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Virtual Campus Tour</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-10">
                Experience the state-of-the-art facilities at our Hai Weruweru campus. Our full virtual tour is launching soon.
              </p>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                Notify Me When Ready
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}
