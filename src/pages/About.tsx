import { useSchool } from '../context/SchoolContext';
import { Target, Heart, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { contacts } = useSchool();

  return (
    <div className="bg-paper min-h-screen">
      {/* Editorial Header */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                   <span className="w-12 h-[1px] bg-primary" />
                   <span className="micro-label text-primary">Discover Our Legacy</span>
                </div>
                <h1 className="editorial-title text-slate-900 mb-12">
                   Shaping <span className="text-secondary italic">Excellence</span> Since 2015.
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-4 translate-y-4">
              <p className="text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-200 pl-8">
                "We don't just teach; we nourish. Our holistic approach ensures children grow in spirit, brain, and body."
              </p>
            </div>
          </div>
        </div>
        
        {/* Large Watermark */}
        <div className="absolute -bottom-10 -right-20 pointer-events-none select-none">
          <span className="text-[280px] font-black text-slate-900 opacity-5 leading-none tracking-tighter uppercase">
            Story
          </span>
        </div>
      </section>

      {/* Core Values - Grid Layout (Recipe 1 Style) */}
      <section className="py-24 border-y border-slate-100 bg-white">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border-x divide-slate-100 border-slate-100">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To provide quality education based on moral values and excellence, preparing students for a global future while maintaining their cultural roots.' },
              { icon: Eye, title: 'Our Vision', desc: 'Becoming the leading educational institution in Tanzania known for holistic student development and academic success.' },
              { icon: Heart, title: 'Our Motto', desc: 'Spirit, Brain & Body Nourishment. We believe a complete education addresses all aspects of human growth.' }
            ].map((item, i) => (
              <div key={i} className="p-12 hover:bg-slate-50 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                   <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Specialized Pattern */}
      <section className="section-padding">
        <div className="container-large">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <span className="micro-label text-primary mb-6 block">The People Behind the Vision</span>
                 <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-12">
                   Governing with <span className="text-primary italic">Integrity.</span>
                 </h2>
                 <p className="text-slate-600 leading-relaxed mb-12 max-w-xl">
                   Our leadership team brings decades of combined experience in Tanzanian primary education and child psychology.
                 </p>
                 
                 <div className="space-y-8">
                    {[
                      { role: 'Director', name: contacts.director.name, bio: 'A visionary educationist with over 15 years of experience in early childhood development.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
                      { role: 'Head Teacher', name: contacts.headTeacher.name, bio: 'Driven by excellence, he leads our academic department with a focus on NECTA standards and student discipline.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' }
                    ].map((leader, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all group">
                         <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                         </div>
                         <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">{leader.role}</span>
                            <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{leader.name}</h4>
                            <p className="text-xs text-slate-500 italic mt-1 line-clamp-1">{leader.bio}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                 <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
                      alt="Leadership Discussion" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                 </div>
                 {/* Accreditation Badge */}
                 <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-900 rounded-full flex flex-col items-center justify-center text-white text-center p-6 border-8 border-paper z-20 animate-float">
                    <CheckCircle2 size={32} className="text-primary mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight">NECTA Top Performing District</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Section - Modern List (Recipe 10 Style) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none select-none">
           <div className="text-[400px] font-black -rotate-12 translate-x-1/2">BETHEL</div>
        </div>
        <div className="container-large relative z-10">
          <div className="mb-20">
             <span className="micro-label text-slate-400 mb-4 block">Proven Results</span>
             <h2 className="text-5xl font-black uppercase tracking-tighter">Why Choose <span className="text-primary">Bethelstars?</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Strict NECTA Curriculum Compliance',
              'English Medium Teaching Environment',
              'Spiritual and Character Development',
              'Modern Learning Facilities',
              'Close Parent-Teacher Monitoring',
              'Extracurricular Activities & Sports'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-lg font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
