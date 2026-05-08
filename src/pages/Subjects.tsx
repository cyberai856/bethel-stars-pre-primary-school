import { BookOpen, GraduationCap, Laptop, Languages, Palette, Microscope, Calculator, History } from 'lucide-react';

export default function Subjects() {
  const subjects = [
    { name: 'English Language', icon: Languages, desc: 'Developing fluency and communication from Early Years.' },
    { name: 'Mathematics', icon: Calculator, desc: 'Building logic, numeracy and problem solving skills.' },
    { name: 'Science', icon: Microscope, desc: 'Exploring natural world and scientific inquiry.' },
    { name: 'Kiswahili', icon: History, desc: 'Connecting with our rich Tanzanian heritage and national language.' },
    { name: 'ICT / Computer', icon: Laptop, desc: 'Equipping students for the digital global era.' },
    { name: 'Social Studies', icon: BookOpen, desc: 'Understanding geography, civics, and our history.' },
    { name: 'Religious Education', icon: GraduationCap, desc: 'Nurturing spiritual growth and moral grounding.' },
    { name: 'Art & Personal Development', icon: Palette, desc: 'Unleashing creativity and physical coordination.' },
    { name: 'Vocational Skills', icon: Laptop, desc: 'Practical home and industry skills for future living.' },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Curriculum</h1>
          <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">NECTA Academic Path</h2>
          <p className="text-slate-600">We follow the Tanzania Institute of Education (NECTA) standards with enriched global learning perspectives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-2">
              <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{s.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="text-[10px] uppercase font-black tracking-widest text-primary flex items-center space-x-2">
                 <div className="w-4 h-px bg-primary" />
                 <span>Core Curriculum</span>
              </div>
            </div>
          ))}
          
          {/* Etc Card */}
          <div className="bg-slate-900 p-10 rounded-[3rem] flex flex-col justify-center text-center">
             <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">And Others...</h3>
             <p className="text-slate-400 text-xs italic tracking-widest uppercase font-bold">Enrichment Classes & Clubs</p>
          </div>
        </div>

        <div className="mt-20 p-12 bg-white rounded-[4rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between shadow-sm">
           <div className="mb-8 md:mb-0 max-w-lg">
             <h4 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Assessment & Growth</h4>
             <p className="text-slate-600 text-sm italic">Students are assessed monthly with full terminal reports and NECTA National Examinations for Standard 4 and Standard 7.</p>
           </div>
           <div className="bg-secondary px-8 py-4 rounded-full font-black text-slate-900 uppercase tracking-widest animate-pulse">
              100% Pass Record
           </div>
        </div>
      </div>
    </div>
  );
}
