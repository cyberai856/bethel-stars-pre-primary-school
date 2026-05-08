import { useSchool } from '../context/SchoolContext';
import { ClipboardCheck, FileText, PhoneCall, GraduationCap, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admission() {
  const { contacts, location, fees } = useSchool();

  const steps = [
    { title: 'Visit & Registration', icon: MapPin, desc: 'Visit our campus at ' + location + ' to get a registration form.' },
    { title: 'Processing Fee', icon: FileText, desc: 'Pay a one-time admission fee of ' + fees.admission + ' Tsh.' },
    { title: 'Student Interview', icon: GraduationCap, desc: 'A basic assessment of the child for proper class placement.' },
    { title: 'Full Enrollment', icon: ClipboardCheck, desc: 'Submit required documents (Birth Certificate, Health report) and pay fees.' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Enrollment 2024/25</h1>
          <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Joining Bethelstars</h2>
          <p className="text-slate-600">Start the journey of nourishing your child's brain and spirit today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {steps.map((step, i) => (
             <div key={i} className="relative text-center group">
                <div className="w-20 h-20 bg-slate-100 text-slate-900 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all shadow-sm">
                   <step.icon size={36} />
                </div>
                <div className="absolute top-10 left-1/2 w-full h-px bg-slate-100 -z-10 hidden lg:block" />
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                <div className="mt-4 text-[10px] font-black text-primary uppercase tracking-[0.3em]">Step 0{i+1}</div>
             </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mb-48" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="text-4xl font-black mb-8 uppercase tracking-tight leading-none">Ready to <span className="text-secondary">Register?</span></h3>
                 <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                   Admission forms are available at the school office throughout the week from 8:00 AM to 4:00 PM. For immediate inquiries, contact the Director.
                 </p>
                 <div className="flex flex-wrap gap-8">
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><PhoneCall size={24} /></div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Contact Director</p>
                          <p className="text-xl font-bold">{contacts.director.phone}</p>
                       </div>
                    </div>
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><MapPin size={24} /></div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Visit Us</p>
                          <p className="text-xl font-bold">{location}</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="bg-white/10 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                 <h4 className="text-xl font-bold mb-6 uppercase tracking-tight">Quick Inquiry</h4>
                 <form className="space-y-4">
                    <input type="text" placeholder="Child's Name" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl outline-none focus:bg-white/10 transition-all" />
                    <input type="text" placeholder="Your Phone Number" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl outline-none focus:bg-white/10 transition-all" />
                    <button className="w-full bg-secondary text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest hover:shadow-2xl transition-all shadow-secondary/20">Submit Inquiry</button>
                 </form>
                 <p className="text-[10px] text-slate-500 text-center mt-6 italic">We'll call you back within 24 hours</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
