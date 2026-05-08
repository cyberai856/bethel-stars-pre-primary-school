import { useSchool } from '../context/SchoolContext';
import { UserCheck, Users, Star, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Teachers() {
  const departments = [
    { name: 'Early Years / Nursery', count: '8 Educators', icon: Heart },
    { name: 'Language & Literacy', count: '5 Teachers', icon: UserCheck },
    { name: 'Mathematics & Logic', count: '4 Teachers', icon: Award },
    { name: 'Science & Discovery', count: '3 Teachers', icon: ShieldCheck },
    { name: 'Holistic & Life Skills', count: '4 Teachers', icon: Star },
    { name: 'Administration', count: '6 Staff', icon: Users },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Faculty</h1>
          <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Dedicated Educators</h2>
          <p className="text-slate-600">Our team consists of qualified specialists committed to nourishing the brain and character of every student.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                <dept.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-slate-900">{dept.name}</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-6">{dept.count}</p>
              
              <div className="space-y-3 mb-8">
                <p className="text-sm text-slate-600 italic">"Committed to delivering curriculum standards with moral excellence."</p>
              </div>

              <div className="aspect-[4/3] bg-slate-200 rounded-[2rem] flex items-center justify-center text-slate-400 text-[10px] uppercase tracking-widest font-bold p-8 text-center border-2 border-dashed border-slate-300">
                Departmental Professional Logo Placeholder
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[4rem] text-center">
           <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Working at Bethelstars</h3>
           <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
             We maintain a strict recruitment policy to ensure only the most ethical and qualified professionals handle our students. Note: Staff photos are not displayed publicly for privacy and security.
           </p>
           <button className="bg-secondary text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-all active:scale-95">
              Submit CV for Future Openings
           </button>
        </div>
      </div>
    </div>
  );
}
