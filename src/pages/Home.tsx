import { useSchool } from '../context/SchoolContext';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Star, Users, Clock, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { motto, location, images } = useSchool();
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden bg-paper">
      {/* Editorial Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 -z-10 hidden lg:block overflow-hidden">
           <img 
             src={images.hero} 
             alt="School Spirit" 
             className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
           />
           <div className="absolute inset-0 bg-primary/20" />
           <div className="absolute bottom-12 left-12">
              <div className="text-white/20 text-[200px] font-black leading-none select-none pointer-events-none uppercase tracking-tighter">
                EXCEL
              </div>
           </div>
        </div>

        <div className="container-large">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 relative z-20">
                 <motion.div
                   initial={{ opacity: 0, y: 40 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                    <div className="flex items-center gap-4 mb-8">
                       <span className="w-12 h-[1px] bg-primary" />
                       <span className="micro-label text-primary">{t('hero.est')}</span>
                    </div>
                    
                    <h1 className="editorial-title text-slate-900 mb-8 max-w-5xl">
                       {t('hero.title')}
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                       <div className="md:col-span-5">
                          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 italic">
                             "{motto}"
                          </p>
                          <div className="flex flex-wrap gap-4">
                            <Link
                              to="/admission"
                              className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
                            >
                              {t('hero.cta.enroll')}
                            </Link>
                            <Link
                              to="/about"
                              className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] border border-slate-200 hover:border-primary transition-all"
                            >
                              {t('hero.cta.story')}
                            </Link>
                          </div>
                       </div>
                       
                       <div className="md:col-span-7 lg:hidden">
                          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                             <img src={images.hero} alt="Students" className="w-full h-full object-cover" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
        
        {/* Floating Vertical Text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
           <div className="flex flex-col items-center space-y-12">
              <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-400 [writing-mode:vertical-lr] rotate-180">
                BethelStars School
              </span>
              <div className="w-[1px] h-32 bg-slate-200" />
           </div>
        </div>
      </section>

      {/* Modern Stats Stripe */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container-large">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Academic Excellence', val: 'NECTA Approved', icon: ShieldCheck },
              { label: 'Subject Specialist', val: '12+ Subjects', icon: BookOpen },
              { label: 'Diverse Community', val: '500+ Students', icon: Users },
              { label: 'Daily Schedule', val: '8AM - 3PM', icon: Clock }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="micro-label">{stat.label}</span>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary" />
                   <span className="text-xl font-black text-slate-900 tracking-tight uppercase">{stat.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs - Editorial Grid */}
      <section className="section-padding">
        <div className="container-large">
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 gap-8">
             <div className="max-w-2xl">
                <span className="micro-label text-primary mb-4 block">Foundations of Success</span>
                <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
                   Holistic Learning <span className="text-secondary italic">Programs.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                   Based on the Tanzania Institute of Education curriculum, we provide a balanced education 
                   that focuses on academic rigor and spiritual growth.
                </p>
             </div>
             <Link to="/curriculum" className="group flex items-center space-x-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">View Full Curriculum</span>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                   <ArrowRight size={20} />
                </div>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: 'Early Years', 
                age: '6 Months - 5 Years', 
                desc: 'A nurturing start focuses on cognitive milestones and social play within a secure daycare environment.',
                icon: Users,
                color: 'bg-primary'
              },
              { 
                title: 'Primary School', 
                age: '6 - 12 Years', 
                desc: 'Intensive NECTA curriculum preparation with emphasis on mathematics, sciences, and languages.',
                icon: GraduationCap,
                color: 'bg-slate-900'
              }
            ].map((program, i) => (
              <div key={i} className="card-premium p-12 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center text-white mb-10 group-hover:rotate-6 transition-all shadow-xl`}>
                   <program.icon size={32} />
                </div>
                
                <span className="micro-label block mb-2">{program.age}</span>
                <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">
                  {program.title}
                </h4>
                <p className="text-slate-600 mb-10 leading-relaxed max-w-sm">
                  {program.desc}
                </p>
                
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-primary">
                   <span>Learn More</span>
                   <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetics Footer Pattern */}
      <section className="h-40 bg-slate-900 flex items-center overflow-hidden">
         <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 6 }).map((_, i) => (
               <span key={i} className="text-8xl font-black text-white/5 uppercase tracking-tighter mx-10">
                 Bethelstars Excellence — Spirit Brain Body — Nursery & Primary
               </span>
            ))}
         </div>
      </section>
    </div>
  );
}
