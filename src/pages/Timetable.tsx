import { useSchool } from '../context/SchoolContext';
import { Calendar, Clock, BookOpen, Coffee, Sun, Moon } from 'lucide-react';

export default function Timetable() {
  const schedule = [
    { time: '08:00 AM', activity: 'Devotion & Assembly', type: 'spiritual' },
    { time: '08:30 AM', activity: 'Core Subject 1', type: 'academic' },
    { time: '09:10 AM', activity: 'Core Subject 2', type: 'academic' },
    { time: '09:50 AM', activity: 'Core Subject 3', type: 'academic' },
    { time: '10:30 AM', activity: 'Short Break / Porridge', type: 'break' },
    { time: '11:00 AM', activity: 'Core Subject 4', type: 'academic' },
    { time: '11:40 AM', activity: 'Core Subject 5', type: 'academic' },
    { time: '12:20 PM', activity: 'Lunch & Play Time', type: 'break' },
    { time: '01:20 PM', activity: 'Extra-Curricular / Labs', type: 'creative' },
    { time: '02:00 PM', activity: 'Closing Lessons', type: 'academic' },
    { time: '03:00 PM', activity: 'Release / Departure', type: 'release' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Daily Routine</h1>
          <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">School Timetable</h2>
          <p className="text-slate-600">A structured day ensures balanced growth for every level.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[4rem] p-10 md:p-20 shadow-inner border border-slate-100">
           <div className="space-y-4">
              {schedule.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 group hover:border-primary transition-all">
                   <div className="w-32 flex items-center space-x-3 text-slate-400 font-black">
                      <Clock size={16} />
                      <span className="text-sm">{item.time}</span>
                   </div>
                   <div className="flex-grow">
                      <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{item.activity}</h4>
                   </div>
                   <div className="md:text-right">
                      <span className={`
                        px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest
                        ${item.type === 'academic' ? 'bg-blue-50 text-blue-600' : ''}
                        ${item.type === 'break' ? 'bg-emerald-50 text-emerald-600' : ''}
                        ${item.type === 'spiritual' ? 'bg-purple-50 text-purple-600' : ''}
                        ${item.type === 'creative' ? 'bg-amber-50 text-amber-600' : ''}
                        ${item.type === 'release' ? 'bg-primary/10 text-primary' : ''}
                      `}>
                         {item.type}
                      </span>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -ml-8 -mt-8" />
              <div className="relative z-10">
                 <h5 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Note for Parents</h5>
                 <p className="text-slate-400 text-sm leading-relaxed italic">"Punctuality is a core value. Please ensure students are at school by 7:45 AM for better spiritual preparation."</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
